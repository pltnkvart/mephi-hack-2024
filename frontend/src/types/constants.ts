import {Person, LayoutRows3, Gift} from '@gravity-ui/icons';

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
];

export interface IError{
    status: number;
    message: string;
}

