import { Injectable } from '@nestjs/common';
import { MOCK_USERS } from '../mocks/users';

@Injectable()
export class UsersService {
  private users = MOCK_USERS;

  getAllUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
}
