import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import React, { Component } from 'react';

export default class KeyboardAvoidingViewTest extends Component {
    constructor(props){
        super(props);
        this.state = {text:'placeholder'};

        this.setState=this.setState.bind(this);
    }
    setState(newText){
        this.setState({text: newText});
    }


    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TextInput
                        underlineColorAndroid={'#ffffff'}
                        placeholder="这里是一个简单的输入框"
                        style={styles.textInput} />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink',
        justifyContent: 'center',//
        paddingHorizontal: 20,
        paddingTop: 20,
      },
      textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 140,
        paddingHorizontal: 10,
      },

});

