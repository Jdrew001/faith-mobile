export class CardModel {
    card: string = '';
    cvv: string = '';
    expiration: string = '';

    setData(card: string, cvv: string, expiration: string) {
        this.card = card;
        this.cvv = cvv;
        this.expiration = expiration;

        console.log(this.card, this.cvv, this.expiration);
    }
}

export class GiveModel {
    email: string = '';
    firstName: string = '';
    lastName: string = '';
    phone: string = '';
    zip: string = '';

    setData(email: string, firstName: string, lastName: string, phone: string, zip: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.zip = zip;
    }
}

export interface GivingModel {
    cardData: CardModel;
    giveData: GiveModel;
}