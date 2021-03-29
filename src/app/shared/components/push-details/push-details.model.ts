import { Image } from "../../model/shared.model";

export interface PushDetails {
    id: number;
    title: string;
    description: string;
    image: Image;
    created_at: string;
}