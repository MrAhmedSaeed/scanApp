/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configurestore';
import HomePage from './src/components/homepage';

const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>        
    );
  }
}
