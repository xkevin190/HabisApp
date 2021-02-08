/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AppComponent from './src/views';
import { Provider } from 'react-redux';
import store from './src/store';


// const WrappedStack = ({ t }) => (
//   <RouteContainer
//     ref={(ref) => {
//       NativationService.setTopLevelNavigator(ref);
//     }}
//     screenProps={{ t }}
//   />
// );
// const ReloadAppOnLanguageChange = translate('common', {
//   bindI18n: 'languageChanged',
//   bindStore: false
// })(WrappedStack);


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {

  render() {
    // store.dispatch(verifyAplicationState());
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
}
