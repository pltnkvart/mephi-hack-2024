import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('api/rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get(':userId')
  getUserRating(@Param('userId') userId: string) {
    const userRating = this.ratingService.getUserRatingById(userId);
    if (!userRating) {
      throw new NotFoundException('User not found');
    }
    return userRating;
  }
}
