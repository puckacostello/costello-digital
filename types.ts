export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export enum AIStatus {
  IDLE = 'idle',
  THINKING = 'thinking',
  SUCCESS = 'success',
  ERROR = 'error'
}
