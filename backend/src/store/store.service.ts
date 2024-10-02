import { Injectable } from '@nestjs/common';
import { MOCK_USERS } from '../mocks/users';
import { MOCK_STORE, MOCK_PRIVILEGES } from '../mocks/store';

@Injectable()
export class StoreService {
  private users = MOCK_USERS;
  private store = MOCK_STORE;
  private privileges = MOCK_PRIVILEGES;

  getAllStoreItems() {
    return this.store;
  }

  buyItem(userId: string, itemId: string) {
    const user = this.users.find((user) => user.id === userId);
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
