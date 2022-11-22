import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

const en = {
  appName: 'MediaApp',
  welcome: 'Hello',
  homeScreenName: 'Home',
  settingScreenName: 'Setting',
};

const es = {
  appName: 'Aplicación multimedia',
  welcome: 'Hola',
  homeScreenName: 'Hogar',
  settingScreenName: 'Ajustes',
};

const ja = {
  appName: 'メディアアプリ',
  welcome: 'こんにちは',
  homeScreenName: '家',
  settingScreenName: '設定',
};

const i18n = new I18n({ en, es, ja });
i18n.enableFallback = true;
i18n.locale = Localization.locale;
// i18n.locale = 'ja';

export { i18n };
