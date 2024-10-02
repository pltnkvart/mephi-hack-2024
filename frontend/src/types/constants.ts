import {Person, LayoutRows3, Gift, Persons, Smartphone} from '@gravity-ui/icons';

export const SERVICE_NAME = "Gamification";

const PORT = 3000;
const HOST = "http://localhost"
const URL = `${HOST}:${PORT}`;

export const BASE_URL = `${URL}/api/`;

export const MENU_ITEMS = [
    {
        id: 'user',
        title: 'Моя страница',
        path: `/users/${localStorage.getItem('userId')}`,
        icon: Person,
    },
    {
        id: 'team',
        title: 'Моя команда',
        path: `/team/${localStorage.getItem('teamId')}`,
        icon: Persons,
    },
    {
        id: 'rating',
        title: 'Рейтинг',
        path: '/rating',
        icon: LayoutRows3,
    },
    {
        id: 'store',
        title: 'Магазин поощрений',
        path: '/store',
        icon: Gift,
    },
    {
        id: 'network',
        title: 'ЛоцПорт',
        path: '/network',
        icon: Smartphone,
    },
];

export interface IError{
    status: number;
    message: string;
}

