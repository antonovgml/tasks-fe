import { Task } from './model/task';


/*

export class Task {
    id: number;
    title: string;
    details: string;
    date_created: Date;
}

*/

export const TASKS: Task[] = [

    {id: 1, title: "task1", details: "details for task 1", date_created: new Date(2018,1,21,10,20,30)},
    {id: 2, title: "task2", details: "details for task 2", date_created: new Date(2018,2,22,10,20,30)},
    {id: 3, title: "task3", details: "details for task 3", date_created: new Date(2018,3,23,10,20,30)},
    {id: 4, title: "task4", details: "details for task 4", date_created: new Date(2018,4,24,10,20,30)},    

]