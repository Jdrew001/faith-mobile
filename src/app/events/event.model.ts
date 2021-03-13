import { Frequency } from "./utils/date.utils";


export interface Calendar {
    id: number;
    title: string;
    description: string;
    repeatable: Frequency;
    start: string;
    end: string;
    cancelledDates: Array<String>;
    image: Image;
    events: Array<Event>;
    allDates: Array<string>;
}

export interface Event {
    id: number;
    description: string;
    title: string;
    time: string;
    cancelledDates: Array<String>;
    image: Image;
    date: string;
}

export interface Image {
    id: string;
    name: string;
    url: string;
}