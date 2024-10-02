import { Controller, Get, Post, Body, NotFoundException, BadRequestException } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('api/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  getStoreItems() {
    return this.storeService.getAllStoreItems();
  }

  @Post('buy')
  buyItem(@Body() body: { userId: string; itemId: string }) {
    const { userId, itemId } = body;
    const result = this.storeService.buyItem(userId, itemId);
    if (!result.success) {
      throw new BadRequestException(result.message);
    }
    return result.data;
  }
}
