import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from './app/components/Component1';

export default class myapp extends Component {
  render() {
    return (
      <Component1 />
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);
