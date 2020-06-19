import React, { Component } from 'react';
import {  View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    // width: 50,
    // height: 200
  }
});

export default class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Image
          style={styles.stretch}
          source={require('../img/1.jpg')}
        />
      </View>
    );
  }
}