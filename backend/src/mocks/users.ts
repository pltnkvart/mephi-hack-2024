import { fakerRU as faker } from '@faker-js/faker';
import { IUser } from "@shared/IUser"
import { IAchievement } from "@shared/IAchievement"
import { ACHIEVEMENTS } from './achievements';
import { RATING } from './rating';

export const users: IUser[] = Array.from({ length: 14 }, (_, index) => {
  const sex: "male" | "female" = faker.person.sex() as "male" | "female";
  const name = faker.person.firstName(sex);
  const surname = faker.person.lastName(sex);

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
    achievements: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, (): IAchievement => {
      const achievement = ACHIEVEMENTS[faker.number.int({ min: 0, max: ACHIEVEMENTS.length - 1 })];
      return {
        id: achievement.id,
        name: achievement.name,
        description: achievement.description,
        image: achievement.image,
      };
    })
  };
});

users.sort((a, b) => b.total_rating - a.total_rating);

users.forEach((user, index) => {
  user.place = index + 1;
});

export const MOCK_USERS = users;
