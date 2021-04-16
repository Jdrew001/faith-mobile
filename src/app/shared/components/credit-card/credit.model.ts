export interface CardInfo {
    card: string;
    cvv: any;
    expiration: any;
}

export enum CardLogo {
    VISA = "visa.png",
    MASTER = "mastercard.png",
    DISCOVERY = "discovery.png"
}