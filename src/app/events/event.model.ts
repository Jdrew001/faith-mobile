export interface Event {
    id: string;
    title: string;
    description: string;
    calendar_type: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    month: string;
    year: string;
    image: Image;
    items: Array<Item>;
    schedule: Array<Schedule>;
}

export enum DetailType {
    single,
    multi,
    schedule
}

export interface Image {
    url: string;
    width: number;
    height: number;
    mime: string;   
}

export interface Item {
    id: string;
    title: string;
    description: string;
    date: string;
    users: any;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Schedule {
    id: string;
    title: string;
    description: string;
    date: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}