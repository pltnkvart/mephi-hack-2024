import { Injectable } from '@nestjs/common';
import { fakerRU as faker } from '@faker-js/faker';
import { IUser } from '@shared/IUser';
import { RATING } from '../mocks/rating';
import { AchievementsService } from '../achievements/achievements.service';

@Injectable()
export class UsersService {
  constructor(private readonly achievementsService: AchievementsService) {}
  users: IUser[];

  async onModuleInit() {
    await this.seedUsers();
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.users.find((user) => user.id === userId);
  }

  private async seedUsers() {
    const achievements = await this.achievementsService.findAll();

    this.users = Array.from({ length: 14 }, (_, index) => {
      const sex: "male" | "female" = faker.person.sex() as "male" | "female";
      const name = faker.person.firstName(sex);
      const surname = faker.person.lastName(sex);
      const achievementsCount = faker.number.int({ min: 1, max: 5 });
      const achievementsIds: string[] = Array.from({ length: achievementsCount }, () => {
        const achievementIndex = faker.number.int({ min: 0, max: achievements.length - 1 });
        return achievements[achievementIndex].id;
      });

      return {
        id: String(index + 1),
        sex: sex,
        name: name,
        surname: surname,
        bio: faker.person.bio(),
        email: faker.internet.email({ firstName: name, lastName: surname, provider: 'locia.ru' }),
        telegram: `@${faker.internet.userName()}`,
        jobTitle: 'Разработчик',
        department: `Команда ${index + 1}`,
        avatar: faker.image.avatar(),
        balance: faker.number.int({ min: 20000, max: 30000, multipleOf: 100 }),
        total_rating: RATING[index].total_rating,
        place: 0,
        achievements: achievementsIds,
      } as IUser;
    });

    this.users.sort((a, b) => b.total_rating - a.total_rating);
    this.users.forEach((user, index) => {
      user.place = index + 1;
    });
  }
}
