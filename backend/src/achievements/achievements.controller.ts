import { Controller, Get, Param } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { Achievement } from './achievement.entity';

@Controller('api/achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  async getAllAchievements(): Promise<Achievement[]> {
    return this.achievementsService.findAll();
  }

  @Get(':id')
  async getAchievement(@Param('id') id: string): Promise<Achievement> {
    return this.achievementsService.findOne(id);
  }
}
