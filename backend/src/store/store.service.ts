import { Injectable } from '@nestjs/common';
import { MOCK_STORE, MOCK_PRIVILEGES } from '../mocks/store';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class StoreService {
  constructor(private readonly usersService: UsersService) {}
  private store = MOCK_STORE;
  private privileges = MOCK_PRIVILEGES;

  getAllStoreItems() {
    return this.store;
  }

  buyItem(userId: string, itemId: string) {
    const user = this.usersService.users.find((user) => user.id === userId);
    const item = this.store.find((item) => item.id === itemId) || this.privileges.find((item) => item.id === itemId);

    if (!user || !item) {
      return { success: false, message: 'User or item not found' };
    }

    if (item.quantity <= 0) {
      return { success: false, message: 'Not enough quantity' };
    }

    if (user.balance < item.price) {
      return { success: false, message: 'Not enough balance' };
    }

    user.balance -= item.price;
    item.quantity -= 1;

    return {
      success: true,
      data: {
        user,
        item,
      },
    };
  }
}
