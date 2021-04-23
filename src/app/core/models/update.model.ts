
export interface UpdateModel {
    enabled: boolean;
    msg: MessageObj;
    updateType: UpdateType
}

export enum UpdateType {
    maintenance = 'maintenance',
    requiredUpdate = 'requiredUpdate',
    softUpdate = 'softUpdate'
}

export interface MessageObj {
    title: string;
    msg: string;
    button: string;
}