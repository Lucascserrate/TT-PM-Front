import { TaskStatus, UserRole } from './enum';

export interface IProject {
    id: number;
    name: string;
    description: string;
    initialDate: string;
    finalDate: string;
}

export interface ITask {
    id: number;
    name: string;
    description: string;
    status: TaskStatus;
    project: IProject;
    user: IUser;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}