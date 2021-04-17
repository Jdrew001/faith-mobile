export class CardModel {
    card: string = '';
    cvv: string = '';
    expiration: string = '';
}

export class GiveModel {
    email: string = '';
    firstName: string = '';
    lastName: string = '';
    phone: string = '';
}

export interface GivingModel {
    cardData: CardModel;
    giveData: GiveModel;
}