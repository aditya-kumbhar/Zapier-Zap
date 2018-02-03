
import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, TextInput, Keyboard, NetInfo, Alert, Navigator, TouchableHighlight, Image
} from 'react-native';

import { Container, Spinner, Header, Content, Item, Input, Radio, Text, Button, ListItem, List, View } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { insertInDB, } from './Zap'
import ViewSheet from './ViewSheet';

export default class App extends Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      DOB: "",
      name: '',
      email: '',
      pass: '',
      mobile: '',
      username: '',
      city: '',
      netInfo: false,
      loader: false,
      viewSheet: false,
    }


  }



  submit = async () => {

    if (this.state.DOB == "" || this.state.name == "" || this.state.email == "" || this.state.pass == "" || this.state.city == "" || this.state.mobile == "" || this.state.username == "") {
      alert("Please Fill in All the Fields");
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var Value = this.state.pass.length.toString();
      var Value1 = this.state.mobile.length.toString();
      if (reg.test(this.state.email) === false) {
        alert("Please Enter Valid Email");
      } else if (Value < 8) {
        alert("Password length must be minimum 8 characters.... ")
      } else if (Value1 != 10) {
        alert("Please Enter Valid 10 Digit Mobile Number")
      } else {
        Keyboard.dismiss();
        this.setState({ loader: true })
        let resp = await insertInDB(this.state.username, this.state.pass, this.state.name, this.state.email, this.state.mobile, this.state.DOB, this.state.city);
        console.log("response in signup page" + resp.status)
        if (resp.status !== 200) {
          if (resp.status === 503) {
            this.setState({ loader: false })
            Alert.alert("Network Error", "Please Check your internet connection")
          } else {
            Alert.alert("Error")
            this.setState({ loader: false })
          }
        } else {
          let data = await resp.json();
          var myJSON = JSON.stringify(data['code']).replace(/"+/g, "");
          console.log("MyJSOn : " + myJSON);
          if (myJSON === "false") {
            Alert.alert("SignUp Failed !", "This Username aleady exists !!")
            this.setState({ loader: false })
          } else {
            Alert.alert("Success", "Congratulation !! You have been successfully Signed Up !")
            this.setState({ loader: false })
            this.setState({ viewSheet: true })

          }

        }
      }
    }
  }

  render() {
    if (this.state.loader == false && this.state.viewSheet == false) {
      return (

        <View style={styles.container}>

          <ImageBackground source={require('./img/back.jpg')} style={styles.background}>

            <View style={styles.content}>
              <Container style={{ flex: 1, alignSelf: 'center', marginTop: 60, }}>
                <Content >

                  <Item rounded style={{ width: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input placeholder='Username' onChangeText={(username) => this.setState({ username })} value={this.state.username} />
                  </Item>
                  <Item rounded style={{ marginTop: 15, width: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input type="password" placeholder='Password' secureTextEntry={true} onChangeText={(pass) => this.setState({ pass })} value={this.state.pass}
                    />
                  </Item>
                  <Item rounded style={{ width: 300, marginTop: 15, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input placeholder='Name' onChangeText={(name) => this.setState({ name })} value={this.state.name} />
                  </Item>
                  <Item rounded style={{ marginTop: 15, width: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input placeholder='Email Address' keyBoardType="email-address" onChangeText={(email) => this.setState({ email })}
                      value={this.state.email}
                    />
                  </Item>

                  <Item rounded style={{ marginTop: 15, width: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input placeholder='Mobile Number' keyboardType='phone-pad' onChangeText={(mobile) => this.setState({ mobile })} value={this.state.mobile}
                    />
                  </Item>
                  <View >
                    <DatePicker
                      style={{ width: null, marginTop: 15, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20, overflow: 'hidden' }}
                      date={this.state.DOB}

                      mode="date"
                      placeholder="Birthday"
                      androidMode="spinner"
                      format="YYYY-MM-DD"
                      minDate="1950-01-01"
                      //maxDate="2018-01-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'relative',
                          left: 0,
                          top: 2,
                          marginLeft: 0,
                        },
                        dateInput: {
                          marginLeft: -160,
                          borderWidth: 0,
                          borderBottomWidth: 1,
                          alignItems: 'center'


                        },
                        dateText: {
                          textAlign: 'left',
                          fontSize: 17,
                          color: 'black',



                        },
                        placeholderText: {
                          textAlign: 'left',
                          fontSize: 18,
                          color: 'grey',
                        }

                      }}
                      onDateChange={(DOB) => { this.setState({ DOB: DOB }) }}
                    />
                  </View>


                  <Item rounded style={{ marginTop: 15, width: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <Input placeholder='City' onChangeText={(city) => this.setState({ city })} value={this.state.city} />
                  </Item>

                  <Button rounded style={{ alignSelf: 'center', marginTop: 15 }} onPress={this.submit}>
                    <Text>Sign Up
                </Text></Button>

                </Content>
              </Container>
            </View>
          </ImageBackground>
        </View>


      );
    }
    else if (this.state.viewSheet == true) {
      return (<View>
        <ViewSheet />
      </View>);
    }
    else {
      return (
        <View style={styles.container}>

          <Spinner color='red' size={60} />
        </View>
      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center'

  },
  content: {
    alignItems: 'center',
  }
});








