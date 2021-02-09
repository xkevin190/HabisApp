import React, { Component } from 'react';
import { View, ImageBackground, StatusBar, StyleSheet, Text } from 'react-native';
import { Button, Icon, Picker } from 'native-base';
import ButonComponent from '../components/Button'
export default class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crustButton: 'NORMAL',
      size: 'S',
      tableNo: 1
    };
  }

  static navigationOptions = {
    header: null,
  };

  /**
   * return to home view
   */
  handleBack = () => {
    this.props.navigation.goBack()
  }

  /**
   * select crust
   * @param {string} crust selected option
   */
  selectCrust = (crust) => {
    this.setState({
      crustButton: crust
    })
  }

  /**
   * function to select the size of the pizza
   * @param {string} size selectd size
   */
  selectSize = (size) => {
    this.setState({
      size: size
    })
  }

  /**
   * function to select table number
   * @param {integer} size selectd size
   */
  onTableValue = (table) => {
    this.setState({
      tableNo: table
    })
  }

  /**
   * this function executes the action of creating order
   */
  handleSubmit = () => {
    const { navigation } = this.props
    const sendObject = {
      Crust: this.state.crustButton,
      Flavor: navigation.state.params.flavor,
      Size: this.state.size,
      Table_No: this.state.tableNo,
      Timestamp: new Date().toISOString()
    }

    console.log(sendObject);
  }

  render() {
    const { navigation } = this.props
    const { size, crustButton } = this.state

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
            <Button
              onPress={() => { this.selectCrust('THIN') }}
              style={
                crustButton === 'THIN' ?
                  styles.styleButtonSizeSelected :
                  styles.styleButtonSize}
              bordered
            >
              <Text style={
                crustButton === 'THIN' ?
                  styles.textButtonSelected :
                  styles.textButton
              }
              >Thin</Text>
            </Button>
            <Button
              onPress={() => { this.selectCrust('NORMAL') }}
              style={
                crustButton === 'NORMAL' ?
                  styles.styleButtonSizeSelected :
                  styles.styleButtonSize
              }
              bordered
            >
              <Text style={
                crustButton === 'NORMAL' ?
                  styles.textButtonSelected :
                  styles.textButton
              }
              >Normal</Text>
            </Button>
            <Button
              onPress={() => { this.selectCrust('THICK') }}
              style={crustButton === 'THICK' ?
                styles.styleButtonSizeSelected :
                styles.styleButtonSize}
              bordered
              success
            >
              <Text
                style={
                  crustButton === 'THICK' ?
                    styles.textButtonSelected :
                    styles.textButton
                }
              >Thick</Text>
            </Button>
          </View>
          <View>
            <Text style={{ paddingHorizontal: 25, paddingTop: 10 }}>
              Size:
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => { this.selectSize('S') }}
              style={
                size === 'S' ?
                  styles.styleButtonSizeSelected :
                  styles.styleButtonSize}
              bordered light
            >
              <Text
                style={
                  size === 'S' ?
                    styles.textButtonSelected :
                    styles.textButton
                }
              >Small</Text>
            </Button>
            <Button
              onPress={() => { this.selectSize('M') }}
              style={
                size === 'M' ?
                  styles.styleButtonSizeSelected :
                  styles.styleButtonSize}
              bordered
            >
              <Text
                style={
                  size === 'M' ?
                    styles.textButtonSelected :
                    styles.textButton
                }
              >Medium</Text>
            </Button>
            <Button
              onPress={() => { this.selectSize('B') }}
              style={
                size === 'B' ?
                  styles.styleButtonSizeSelected :
                  styles.styleButtonSize}
              bordered success
            >
              <Text
                style={
                  size === 'B' ?
                    styles.textButtonSelected :
                    styles.textButton
                }
              >Big</Text>
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
                  selectedValue={this.state.tableNo}
                  onValueChange={this.onTableValue}
                >
                  {arrayPicker.map((table) => (
                    <Picker.Item
                      key={table}
                      label={table}
                      value={table}
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
              handleSubmit={this.handleSubmit}
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