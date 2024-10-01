import { fakerRU as faker } from '@faker-js/faker';
import { ACHIEVEMENTS } from "./achievements.js";
import { RATING } from "./rating.js";

export const users = Array.from({ length: 14 }, (_, index) => {
    const sex = faker.person.sex();
    const name = faker.person.firstName(sex);
    const surname= faker.person.lastName(sex);
    
    return {
        id: (index + 1).toString(),
        sex: sex,
        name: name,
        surname: surname,
        bio: faker.person.bio(),
        email: faker.internet.email({ firstName: name, lastName: surname, provider: 'locia.ru' }),
        telegram: `@${faker.internet.userName()}`,
        jobTitle: "Разработчик",
        department: `Команда ${index + 1}`,
        avatar: faker.image.avatar(),
        balance: faker.number.int({ min: 20000, max: 30000, multipleOf: 100 }),
        total_rating: RATING[index].total_rating,
        achievements: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => {
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

