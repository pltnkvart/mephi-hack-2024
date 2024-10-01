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

export interface IAchievement{ 
    id: string,
    name: string, 
    description: string,
    image: string,
}

export interface IRating{
    id: string,
    commits: number,
    pull_requests: number,
    reviews: number,
    tasks_done: number,
    tasks_in_progress: number,
    tasks_total: number,
    total_rating: number,
}