import React, { Component } from 'react';
import { Header, Body, Right, Button, Icon, Title, StatusBar } from 'native-base';
import { StyleSheet, Text } from 'react-native';

export default class HeaderComponent extends Component {

  goToOrders = () => {
    this.props.navigation.navigate('orders')
  }

  render() {
    return (
      <Header style={styles.headerStyle} androidStatusBarColor="#039343">
        <Body>
          <Title style={styles.title}>
            {this.props.title ? this.props.title : 'Pizzas'}</Title>
        </Body>
        {this.props.order && <Right>
          <Button transparent onPress={this.goToOrders}>
            <Text style={styles.textStyle}>{this.props.order.length}</Text>
            <Icon name="pizza" />
          </Button>
        </Right>}
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

  textStyle: {
    color: 'white',
    fontSize: 18
  }

});
