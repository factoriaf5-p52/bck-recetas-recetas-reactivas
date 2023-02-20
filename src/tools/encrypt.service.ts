import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';

@Injectable()
export class EncryptService {
  async encrypt(password: string) {
    try {
      const salt = await genSalt(10);

      const result = await hash(password, salt);

      return result;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
  async compare(password: string, hash: string) {
    return compare(password, hash);
  }
}