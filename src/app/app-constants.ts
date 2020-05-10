import { ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';


export class AppConstants {
    public static PAGES = [
        {
            title: 'Announcements',
            url: '/announcements',
            icon: 'megaphone',
            disabled: false
        },
        {
            title: 'Events',
            url: '/events',
            icon: 'calendar',
            disabled: false
        },
        {
            title: 'Prayer Requests',
            url: '/prayer-requests',
            icon: 'book',
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
            icon: 'chatbubbles',
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

    public static themedBrowserOptions: ThemeableBrowserOptions = {
        statusbar: {
            color: '#ffffffff'
        },
        toolbar: {
            height: 44,
            color: '#516065'
        },
        title: {
            color: '#ffffff',
            showPageTitle: false,
            staticText: 'Faith Website'
        },
        backButton: {
            wwwImage: 'images/back.jpg',
            wwwImageDensity: 2,
            align: 'left',
            event: 'backPressed'
        },
        forwardButton: {
            wwwImage: 'images/forward.jpg',
            wwwImageDensity: 2,
            align: 'left',
            event: 'forwardPressed'
        },
        closeButton: {
            wwwImage: 'svg/close-outline.svg',
            wwwImageDensity: 2,
            align: 'left',
            event: 'closePressed'
        },
        backButtonCanClose: true
    }
    public static giveUrl = 'http://discoverfaitharlington.org/'
}