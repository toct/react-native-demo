import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class Home extends Component {
    render(){
        return(
            <View style={{ flex:1,alignItems:'center', justifyContent:'center',}}>
                <TouchableHighlight onPress={this._goTNext.bind(this)}>
                    <Text style={{ paddingVertical:10,paddingHorizontal:25,backgroundColor:'lightblue'}}>go to Notifications</Text>
                </TouchableHighlight>
            </View>

        );
    }

    _goTNext = ()=>{
        this.props.navigation.navigate('SecondScene');
    }
}