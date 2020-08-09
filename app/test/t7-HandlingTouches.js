/**
 * basic button component
 * <Button
 *      onPress={() => {
 *          Alert.alert('You tapped the button!');
 *      }}
 *      title="Press Me"
 * />
 *
 */


 //A basic button component that should render nicely on any platform

//Text to display for blindness accessibility features 
//Used to locate this view in end-to-end tests.
import React, { PureComponent } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class HandingTouch extends PureComponent {
    render(){
        return(
            <View style={styles.backgroundView}>
                <Button ref={(c)=>this._btn=c} title='title' 
                onPress={()=>{ 
                    console.log('onpress');
                }} 
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