import React, { Component } from 'react';
import { Text, View } from 'react-native';


// note:Notice the braces surrounding {this.props.name} - these embed the variable pic into JSX.
//  You can put any JavaScript expression inside braces in JSX.
// https://react-native.org/doc/props.html
class Greeting extends Component {
    render() {
        return(
            <View style={{alignItems:'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}


export default class LotsfGreetings extends Component {
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}

