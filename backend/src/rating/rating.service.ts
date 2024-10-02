import { Injectable } from '@nestjs/common';
import { RATING } from '../mocks/rating';

@Injectable()
export class RatingService {
  private ratings = RATING;

  getUserRatingById(userId: number) {
    return this.ratings.find((user) => user.id == userId);
  }
}
