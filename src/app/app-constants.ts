import { ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


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
    public static options : InAppBrowserOptions = {
        location : 'no',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };

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
            image: 'back',
            wwwImageDensity: 2,
            align: 'left',
            event: 'backPressed'
        },
        forwardButton: {
            image: 'forward',
            wwwImageDensity: 2,
            align: 'left',
            event: 'forwardPressed'
        },
        closeButton: {
            image: 'close',
            wwwImageDensity: 2,
            align: 'left',
            event: 'closePressed'
        },
        backButtonCanClose: true
    }
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