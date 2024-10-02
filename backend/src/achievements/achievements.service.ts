import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private readonly achievementsRepository: Repository<Achievement>,
  ) {}

  async findAll(): Promise<Achievement[]> {
    return this.achievementsRepository.find();
  }

  async findOne(id: string): Promise<Achievement> {
    return this.achievementsRepository.findOneBy({ id });
  }

  async create(achievement: Achievement): Promise<Achievement> {
    return this.achievementsRepository.save(achievement);
  }
}
