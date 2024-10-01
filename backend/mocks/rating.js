import { fakerRU as faker } from '@faker-js/faker';

export const RATING = Array.from({ length: 14 }, (_, index) => {
    const commits = faker.number.int({ min: 1, max: 10 });
    const pull_requests = faker.number.int({ min: 1, max: 10 });
    const tasks_done = faker.number.int({ min: 1, max: 10 });
    const tasks_in_progress = faker.number.int({ min: 1, max: 10 }) 
    const tasks_total = Number(commits) + Number(pull_requests) + 1;
    const reviews = faker.number.int({ min: 1, max: 10 });
    const total_rating = (commits + pull_requests + tasks_done + tasks_in_progress + reviews) / 5;

    return {
        id: (index + 1).toString(),
        commits: commits,
        pull_requests: pull_requests,
        reviews: reviews,
        tasks_done: tasks_done,
        tasks_in_progress: tasks_in_progress,
        tasks_total: tasks_total,
        total_rating: total_rating,
    };
});
