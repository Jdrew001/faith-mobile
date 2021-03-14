export class AppConstants {
    public static PAGES = [
        {
            title: 'Announcements',
            url: '/announcements',
            icon: 'megaphone',
            disabled: false
        },
        {
            title: 'Calendar',
            url: '/events',
            icon: 'calendar',
            disabled: false
        },
        {
            title: 'Contact Us',
            url: '/prayer-requests',
            icon: 'chatbubbles',
            disabled: false
        },
        {
            title: 'Ministries',
            url: '/ministries',
            icon: 'people',
            disabled: false
        },
        {
            title: 'Connect',
            url: '/connect',
            icon: 'book',
            disabled: false
        },
        {
            title: 'Website',
            url: '/give',
            icon: 'globe',
            disabled: false
        }
    ];

    public static MENU_URL = 'menus';

    public static giveUrl = 'http://discoverfaitharlington.org/';
    public static feedbackUrl = 'https://forms.gle/2qMbwfyGtjY1Eqc36';
    public static networkAlertParams = {
        header: 'Alert',
        subHeader: 'Network Alert',
        message: 'Your network connection got disconnected.'
    };
    public static PREACHERS = 'preachers';
    public static TAGS = 'study-tags';
}