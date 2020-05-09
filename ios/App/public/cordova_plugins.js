
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "cordova-plugin-ionic.common",
          "file": "plugins/cordova-plugin-ionic/dist/common.js",
          "pluginId": "cordova-plugin-ionic",
        "clobbers": [
          "IonicCordova"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open",
          "window.open"
        ]
        },
      {
          "id": "cordova-plugin-ionic.guards",
          "file": "plugins/cordova-plugin-ionic/dist/guards.js",
          "pluginId": "cordova-plugin-ionic",
        "runs": true
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-inappbrowser": "3.2.0",
      "cordova-plugin-ionic": "5.4.7",
      "cordova-plugin-screen-orientation": "3.0.2",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    