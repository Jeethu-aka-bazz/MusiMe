import {AppRegistry} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('MusiMe', () => App);

AppRegistry.runApplication('MusiMe', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
