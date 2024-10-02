import { Controller, Get } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';

@Controller('api/privileges')
export class PrivilegesController {
  constructor(private readonly privilegesService: PrivilegesService) {}

  @Get()
  getPrivileges() {
    return this.privilegesService.getAllPrivileges();
  }
}
