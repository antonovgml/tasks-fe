export class Task {
    id: number;
    title: string;
    details: string;
    date_created: Date;

    public constructor() {
        this.title = 'New Task';
        this.details = '';
    }
}
