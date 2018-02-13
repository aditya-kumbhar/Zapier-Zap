import React, { Component } from 'react'
import { View, Text, Linking, StyleSheet, ImageBackground } from 'react-native'

export default class ViewSheet extends Component {

  render() {
    return (
      <View >
        <ImageBackground source={require('./img/welcome.jpg')} style={styles.background}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10, textAlign: 'center', color: 'black' }}>Welcome </Text>
          <Text style={{ color: 'black', fontSize: 20, marginTop: 50, marginLeft: 50 }}>
            Your Registration Details have been successfully stored {" "}
            <Text style={{ color: 'blue', fontSize: 20 }}
              onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1fe3l8quce188kVPSmL-HSsQbiZwiSlW6OpHua92cBII/edit?usp=sharing')}>
              here .
             </Text>
          </Text>
        </ImageBackground>
      </View>


    );
  }


}


const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center'

  },
  background: {

    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'

  },

  content: {
    alignItems: 'center',
  }
});