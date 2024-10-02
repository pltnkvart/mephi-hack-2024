import { IAchievement } from './IAchievement';

export interface IUser{
  id: string,
  name: string,
  surname: string,
  bio: string,
  email: string,
  telegram: string,
  jobTitle: string,
  department: string,
  avatar: string,
  balance: number,
  total_rating: number,
  place: number,
  achievements: IAchievement[],
}