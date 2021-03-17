import { Frequency } from "./utils/date.utils";


export interface Calendar {
    id: number;
    title: string;
    description: string;
    repeatable: Frequency;
    start: string;
    end: string;
    cancelledDates: any[];
    image: Image;
    events: Array<Event>;
    allDates: Array<string>;
    details: Array<Detail>;
}

export interface Event {
    id: number;
    description: string;
    title: string;
    time: string;
    cancelledDates: Array<any>;
    image: Image;
    date: string;
    cancelled: boolean;
}

export interface Image {
    id: string;
    name: string;
    url: string;
}

export interface Detail {
    title: string;
    description: string;
    repeatable: string;
    isCancelled: boolean;
    events: Array<DetailEvent>;
    image: Image;
    date: string;
}

export interface DetailEvent {
    title: string;
    time: string;
    isCancelled: boolean;
}