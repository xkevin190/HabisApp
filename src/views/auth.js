/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import InputField from '../components/Input';
import Button from '../components/Button';
import { View, ScrollView, ToastAndroid, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AsyncStorage } from 'react-native';

const logo = require('../utils/img/logo.jpg');
const initialValues = {
  username: '',
  password: '',
};

export default class Equilibrio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      visible: false,
    };
  }

  handleTest = async () => {
    try {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({ userName: 'admin', password: 'admin' }),
      );
    } catch (error) {
      console.log('err', error);
    }
  };

  handleSubmit = async (values, { resetForm }) => {
    await this.props.login(values, (message) => {
      ToastAndroid.showWithGravityAndOffset(
        message,
        1,
        ToastAndroid.BOTTOM,
        25,
        60,
      );
    });
    resetForm(initialValues);
  };

  static navigationOptions = {
    header: null,
  };

  // componentWillUpdate() {
  //   if (this.state.visible) {
  //     setTimeout(() => {
  //       this.setState({ visible: false });
  //     }, 1);
  //   }
  // }

  setLocalStorage = async () => {
    await AsyncStorage.setItem('match', JSON.stringify(data.match));
  };

  render() {
    let validationSchema;
    if (this.state.view === 'register') {
      validationSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().label().required(),
      });
    } else {
      validationSchema = yup.object().shape({
        username: yup.string().required('Este campo es requerido'),
        password: yup.string().required('Este campo es requerido'),
      });
    }

    return (
      <>
        <Formik
          InitialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
          render={({ values, handleSubmit, setFieldValue, errors }) => (
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                paddingBottom: 40,
              }}>
              <View style={{ marginTop: 30 }}>
                <Image
                  source={logo}
                  style={{ resizeMode: 'contain', height: 300 }}
                />
              </View>
              <View style={{ width: '90%' }}>
                <InputField
                  label="Username"
                  value={values.username}
                  onChange={setFieldValue}
                  name="username"
                  keyboardType="email-address"
                  error={errors.username}
                />
                <InputField
                  label="Password"
                  value={values.password}
                  onChange={setFieldValue}
                  name="password"
                  error={errors.password}
                  secureTextEntry
                />
              </View>

              {this.state.view === 'login' && (
                <View style={{ position: 'relative', left: '30%' }}>
                  <Button
                    title="LOGIN"
                    type="other"
                    handleSubmit={handleSubmit}
                  />
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  width: '100%',
                  alignItems: 'center',
                }}
              />
            </ScrollView>
          )}
        />
      </>
    );
  }
}
