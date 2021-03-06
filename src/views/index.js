import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Auth from './Auth';
import { connect } from 'react-redux';
import { logout, signOff } from '../store/AplicationAction';
import Home from './Home';
class DualApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }


  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        {!this.props.auth && <Auth {...this.props} />}
        {this.props.auth && <Home order={this.props.order} signOff={this.props.signOff} navigation={this.props.navigation} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => state.app;

export default connect(mapStateToProps, { logout, signOff })(DualApp);
