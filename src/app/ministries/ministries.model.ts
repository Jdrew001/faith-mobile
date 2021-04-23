export class MinistryContent {
    ministrySection: Array<{id: number, title: string, description: string, background: Image, remoteImage: boolean}>;

    constructor() {
        this.ministrySection = [
            {
                id: 1,
                title: 'FAITH YOUTH',
                description: `<p class="text-center">Youth class starts every Sunday at 10:00 a.m.<br>Every Friday night, there is a youth event for students ages 12-17.<br>Sign up for text alerts for specific event details.</p>`,
                background: this.createImage('images/faith-youth.jpg'),
                remoteImage: false
            },
            {
                id: 2,
                title: 'FAITH KIDS',
                description: `<p class="text-center">Kid classes start every Sunday at 10:00 a.m. This is a specially tailored classroom and lesson just for them! Every Wednesday, there is a class for kids ages 3-10 after worship. </p>`,
                background: this.createImage('images/kids.jpg'),
                remoteImage: false
            },
            {
                id: 3,
                title: 'LADIES',
                description: `<p class=\"text-center\">It is important to get to know and receive encouragement from other women who love God.Ladies socials and studies are offered on Faith Fellowship nights.</p>`,
                background: this.createImage('images/flowers.jpg'),
                remoteImage: false
            },
            {
                id: 4,
                title: 'MENS',
                description: `<p class=\"text-center\">Relax and spend time having fun with other christ-centered men.<br>Mens socials and studies are offered on Faith Fellowship nights.</p>`,
                background: this.createImage('images/mens.jpg'),
                remoteImage: false
            },
            {
                id: 5,
                title: 'MARRIEDS',
                description: `<p class=\"text-center\">Strong marriages that are connected to God are important.<br>Married socials and studies are offered on Faith Fellowship nights.<br>If you and your partner are interested in marital or premarital counseling,<br>please contact pastor for a session.</p>`,
                background: this.createImage('images/marrieds.jpg'),
                remoteImage: false
            },
            {
                id: 6,
                title: 'BIBLE STUDY',
                description: `<p class=\"text-center\">As fellow learners, we want to join you in delving into the Word.<br>We offer free Bible studies that are tailored to you and your spiritual journey.Ask anyone on our ministry team to help you schedule a Bible study.</p>`,
                background: this.createImage('images/bible.jpg'),
                remoteImage: false
            }
        ]
    }

    private createImage(url) {
        const image = new Image();
        image.url = url;
        return image;
    }
}

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