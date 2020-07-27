import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Other extends Component {
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{marginTop:50}} >Other</Text>
                <Button title = "drawer" onPress= {()=>{
                    this.props.navigation.toggleDrawer();
                }}></Button>
            </View>
        );
    }
}