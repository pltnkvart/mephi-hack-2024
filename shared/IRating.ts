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