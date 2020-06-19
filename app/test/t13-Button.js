//A basic button component that should render nicely on any platform

//Text to display for blindness accessibility features 
//Used to locate this view in end-to-end tests.
import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class ButtonTest extends Component {
    render(){
        return(
            <View style={styles.backgroundView}>
                <Button title='title' 
                onPress={()=>{ console.log('onpress')}} 
                color="#841584" 
                accessibilityLabel="Learn more about this purple button"

                ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView:{
        marginTop:60,
        flex:1, 
        flexDirection:'column', 
        alignItems:'center',
    }

});