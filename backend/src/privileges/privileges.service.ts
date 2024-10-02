import { Injectable } from '@nestjs/common';
import { MOCK_PRIVILEGES } from '../mocks/store';

@Injectable()
export class PrivilegesService {
  private privileges = MOCK_PRIVILEGES;

  getAllPrivileges() {
    return this.privileges;
  }
}
