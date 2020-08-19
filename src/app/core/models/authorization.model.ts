export interface Registration {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface Login {
    username: string;
    password: string;
}

export enum FormTypes {
    login = 'login', registration = 'registration', code = 'code'
}