import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import layout from './src/views/layout';
import rootcomponents from './src/navigation_study/index';
import banner_scrollview from './src/banner/index';

AppRegistry.registerComponent(appName, () => rootcomponents);
