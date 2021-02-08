import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Auth from './auth';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
    return (
      <View>
        <Auth />
      </View>
    );
  }
}
