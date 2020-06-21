export interface Event {
    title: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    image: Image;
    item: Array<Item>;
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