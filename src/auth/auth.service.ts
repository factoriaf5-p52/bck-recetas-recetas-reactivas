import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';
import { IUser } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { EncryptService } from 'src/tools/encrypt.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private encryptService: EncryptService,
    ) {};

    async validateUser(email: string, password: string): Promise<IUser>{
        const user = await this.usersService.findOneByEmail(email);

        if(user){
            const isValidPassword = await this.encryptService.compare(password, user.password);
            
            if(isValidPassword) {
                const { password, ...result } = user;
                return result as IUser;                
            }
        }
        return null;
    }

    async login(user: any){
        const payload = { email: user.email, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
