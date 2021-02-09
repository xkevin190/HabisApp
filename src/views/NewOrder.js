import React, { Component } from 'react';
import { View, ImageBackground, StatusBar, StyleSheet, Text } from 'react-native';
import { Button, Icon, Picker } from 'native-base';
import ButonComponent from '../components/Button'
export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header: null,
  };


  handleBack = () => {
    this.props.navigation.goBack()
  }


  render() {
    const { navigation } = this.props
    const arrayPicker = ['1', '2', '3', '4']
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{ flex: 1 }} >
          <ImageBackground source={navigation.state.params.image} style={styles.imageBackground}>

            <Button transparent style={styles.buttonsStyle} onPress={this.handleBack}>
              <Icon style={styles.iconStyle} name="close" />
            </Button>

            <Button transparent style={styles.buttonsStyle}>
              <Icon style={styles.iconStyle} name="pizza" />
            </Button>

          </ImageBackground>
        </View>
        <View style={{ flex: 1 }}>

          <View style={styles.titleStyle}>
            <Text style={styles.textStyle}>{navigation.state.params.flavor}</Text>
          </View>
          <View>
            <Text style={{ paddingHorizontal: 25, paddingTop: 10 }}>
              Crust:
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.styleButtonSizeSelected} bordered light>
              <Text style={styles.textButtonSelected}>Thin</Text>
            </Button>
            <Button style={styles.styleButtonSize} bordered>
              <Text style={styles.textButton} >Normal</Text>
            </Button>
            <Button style={styles.styleButtonSize} bordered success>
              <Text style={styles.textButton}>Thick</Text>
            </Button>
          </View>


          <View>
            <Text style={{ paddingHorizontal: 25, paddingTop: 10 }}>
              Size:
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.styleButtonSizeSelected} bordered light>
              <Text style={styles.textButtonSelected}>Small</Text>
            </Button>
            <Button style={styles.styleButtonSize} bordered>
              <Text style={styles.textButton} >Medium</Text>
            </Button>
            <Button style={styles.styleButtonSize} bordered success>
              <Text style={styles.textButton}>Big</Text>
            </Button>
          </View>

          <View>

            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <Text style={{ paddingHorizontal: 25, paddingTop: 17 }}>
                Table Nro:
              </Text>
              <View style={{ width: '30%' }}>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.address}
                  onValueChange={this.onValueChange}
                >
                  {arrayPicker.map((address) => (
                    <Picker.Item
                      key={address}
                      label={address}
                      value={address}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          <View style={{ height: 50, width: "100%", paddingHorizontal: '5%', marginTop: 10 }}>
            <ButonComponent
              title="Holaaaaa"
              type="primary"
              handleSubmit={() => { }}
            />
          </View>
        </View>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonsStyle: {
    paddingTop: 50,
  },

  textButton: {
    paddingHorizontal: 20,
    color: '#757575'
  },

  buttonContainer: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingTop: 10,
    paddingLeft: 25,
  },
  textButtonSelected: {
    paddingHorizontal: 20,
    color: 'red'
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#757575'
  },



  titleStyle: {
    paddingTop: 10,
    paddingLeft: 20
  },

  styleButtonSize: {
    borderRadius: 100,
    borderColor: '#757575',
    marginHorizontal: 5
  },

  styleButtonSizeSelected: {
    borderRadius: 100,
    borderColor: 'red',
    marginHorizontal: 5
  },

  iconStyle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },

  dropDownStyle: {
    marginVertical: 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 20
  },



})