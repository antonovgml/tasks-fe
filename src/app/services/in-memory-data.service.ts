import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const tasks = [
            { id: 1, title: "task1", details: "details for task 1", date_created: new Date(2011, 1, 21, 10, 20, 30) },
            { id: 2, title: "task2", details: "details for task 2", date_created: new Date(2012, 2, 22, 10, 20, 30) },
            { id: 3, title: "task3", details: "details for task 3", date_created: new Date(2013, 3, 23, 10, 20, 30) },
            { id: 4, title: "task4", details: "details for task 4", date_created: new Date(2014, 4, 24, 10, 20, 30) },
            { id: 5, title: "task5", details: "details for task 5", date_created: new Date(2015, 5, 24, 10, 20, 30) },
        ]
        return { tasks };
    }
}