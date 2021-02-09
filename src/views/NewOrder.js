import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'

export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}
