import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { GB_Debug } from './common/GB_Common'

export default class ThirdScene extends Component {
    constructor(props){
        super(props);

        this.backToPreviousPage.bind(this);//绑定不起作用？？？？？

        console.log("Third Scene constructor start");
        
        this.didFocusListener = this.props.navigation.addListener(
            'focus',
            (obj) => {console.log("ThirdScene didFocus start")}
        );
        this.didBlurListener = this.props.navigation.addListener(
            'blur',
            (obj) => {
                console.log('ThirdScene didBlur start');
                GB_Debug.Show(obj);

            }
        );

        this.didStateListener = this.props.navigation.addListener(
            'state',
            (obj) => {console.log('ThirdScene didState start')}
        );

        this.didBeforeRemoveListener = this.props.navigation.addListener(
            'beforeRemove',
            (e) => {
                console.log('ThirdScene beforeRemove start');
                if (!hasUnsavedChanges) {
                    // If we don't have unsaved changes, then we don't need to do anything
                    return;
                }
          
                // Prevent default behavior of leaving the screen
                e.preventDefault();
          
                // Prompt the user before leaving the screen
                Alert.alert(
                    'Discard changes?',
                    'You have unsaved changes. Are you sure to discard them and leave the screen?',
                    [
                      { text: "Don't leave", style: 'cancel', onPress: () => {} },
                      {
                        text: 'Discard',
                        style: 'destructive',
                        // If the user confirmed, then we dispatch the action we blocked earlier
                        // This will continue the action that had triggered the removal of the screen
                        onPress: () => navigation.dispatch(e.data.action),
                      },
                    ]
                );
            }
        );
    }

    componentDidMount() {
        GB_Debug.Show(this.props.navigation.state);

        const passobj = this.props.route.params; //取出传递过来的值，
        this.props.navigation.setOptions({
            title:passobj.defualtTitle,
        });
    }


    backToPreviousPage () {
        this.props.navigation.goBack();//返回上层
    }

    backToRootPage () {
        this.props.navigation.popToTop();
        this.props.route.params.callback('back to home');
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <!--这样可以绑定 ？？？> */}
                <Text style={styles.buttonStyle} onPress={this.backToPreviousPage.bind(this)}> 
                    back to previous page
                </Text>

                <Text style={styles.buttonStyle} onPress = {this.backToRootPage.bind(this)}>
                    back to root page
                </Text>
                
                <Text style={styles.buttonStyle} onPress = {()=>{this.props.navigation.navigate("ss")}}>
                    back to next page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonStyle:{
        marginTop:40,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'lightblue',
    }
});