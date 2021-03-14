export class Image {
    alternativeText: string = '';
    caption: string = '';
    created_at: string = '';
    ext: string = '';
    formats: any = {};
    hash: string = '';
    height: number = 1;
    id: number = 1;
    mime: string = '';
    name: string = '';
    previewUrl: string = '';
    provider: string = '';
    provider_metadata: string = '';
    size: number = 0;
    updated_at: string = '';
    url: string = '';
    width: number = 100;
}

export interface File {
    id: number;
    name: string;
    url: string;
}