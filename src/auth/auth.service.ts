import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/schema/user.schema';
import { IUser } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        //private encryptService: EncryptService,
        ){};

    async validateUser(email:string, password:string):Promise<IUser>{
        try{
            const user = await this.usersService.findOneByEmail(email);
            if(user && user.password === password){
                const { password, ...result } = user;
                return result;
            }
            return null;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async login(user: User){
        try {
            //const validatedUser = await this.validateUser(user.email, user.password)
            //const payload = { email: user.email, sub: user._id };
            return {
                access_token: this.jwtService.sign(user),
            };            
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
