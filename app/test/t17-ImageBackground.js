// react-native ImageBackground as web background-image property

import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';

export default class  ImageBackgroundTest extends Component {
    render() {
        return(
            <ImageBackground source={require('../img/1.jpg')} style={{width: '100%', height: '100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:40}}>Inside Component</Text>
            </ImageBackground>
        );
    }
}