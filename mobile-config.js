App.info({
  name: 'Super-List',
  description: 'A simple todo list app tweaked and built in Meteor.',
  author: 'Percolate Studio Team & modded by Taras Petryk',
  email: '',
  version: '0.0.3'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/icon-60x60.png',
  'iphone_2x': 'resources/icons/icon-60x60@2x.png',
  'ipad': 'resources/icons/icon-72x72.png',
  'ipad_2x': 'resources/icons/icon-72x72@2x.png',

  // Android
  'android_ldpi': 'resources/icons/icon-36x36.png',
  'android_mdpi': 'resources/icons/icon-48x48.png',
  'android_hdpi': 'resources/icons/icon-72x72.png',
  'android_xhdpi': 'resources/icons/icon-96x96.png'
});

App.launchScreens({
  // iOS

  // Android
  'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.accessRule("*");

