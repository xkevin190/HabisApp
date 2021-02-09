import React, { Component } from 'react';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header style={styles.headerStyle} androidStatusBarColor="#039343">
        <Body>
          <Title style={styles.title}>Pizzas</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    fontWeight: '700',
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: '#039343',
  },
});
