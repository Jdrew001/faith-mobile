export interface Sermon {
    createdAt: string;
    date: string;
    id: string;
    study_tags: Tags[];
    title: string;
    updatedAt: string;
    audio: Audio;
}

export interface Tags {
    name: string;
}

export interface Audio {
    url: string;
}