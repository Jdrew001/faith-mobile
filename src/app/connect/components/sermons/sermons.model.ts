export interface Sermon {
    createdAt: string;
    date: string;
    id: string;
    study_tags: Tags[];
    title: string;
    updatedAt: string;
    audio: Audio;
    preacher: string;
}

export interface Tags {
    name: string;
}

export interface Audio {
    url: string;
}

export interface SermonData {
    prev: Sermon;
    current: Sermon;
    next: Sermon;
    data: Sermon[];
}