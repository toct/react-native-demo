/**
 * For data that is going to change, we have to use state.
 * In general, you should initialize state in the constructor, 
 * and then call setState when you want to change it.
 * https://react-native.org/doc/state.html

 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

    constructor(props) {
        super(props);

        this.state = { isShowingText:true };

         // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => ({ isShowingText:!previousState.isShowingText }));
        }, 1000);
    }


    render() {
        if(!this.state.isShowingText){
            return null;
        }

        return (
            <Text>{ this.props.text }</Text>
        );
    }
}



export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}