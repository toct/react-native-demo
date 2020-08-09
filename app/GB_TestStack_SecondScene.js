import React, { Component } from 'react';
import  {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
  } from 'react-native';
  
import { CommonActions } from '@react-navigation/native';

import commonSet, { CommonDimensions as dimensions } from './common/GB_Common'


export default class SecondScene extends Component {
      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          inputValue: '',
        };
        this.isNewStyle = false;
      }
  
      componentDidMount(){
        console.log("stack second ---- componentDidMount() called");  
        this.props.navigation.setOptions({title:this.props.route.params.defualtTitle});
        if(this.props.navigation.isFocused()){
          alert("navigation.isFocused() - check whether the screen is focused");
        }
      }
      componentWillUnmount(){
          console.log("stack second ---- componentWillUnmount() called");
          if(!this.props.navigation.isFocused()){
            // alert("navigation.isFocused() - check whether the Stack Second screen is Unfocused");
          }
          // this.didBlurSubscription();
      }
  
      render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle}
                  ref={element=>this.textInput = element}
                  value={this.state.inputValue}
                  placeholder='navigation title'
                  placeholderTextColor='gray'
                  onChangeText={(textInputValue)=>{
                    this.setState({inputValue:textInputValue});
                  }}/> 

                <Text>navigation functions that dispatch navigation actions on the route's router</Text>
                <Text style={styles.textStyle}>navigate - go to another screen, figures out the action it needs to take to do it</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_navigate.bind(this)}>navigate to next scene with router params</Text>
                <Text style={styles.textStyle}>reset - wipe the navigator state and replace it with a new routes</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_reset.bind(this)}>reset navigator scene index 0 with this scene</Text>   
                <Text style={styles.textStyle}>goBack - close active screen and move back in the stack</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_goback.bind(this)} ref="text2" >back to previous page</Text>
                <Text style={styles.textStyle}>setParams - make changes to route's params that passed by navigation.navigate() from other scene</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_setParams.bind(this)}>setParams set current scene params</Text>
                <Text style={styles.textStyle}>dispatch - send an action to router</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_dispatch.bind(this)}>navigation.dispatch a set of actions that above</Text>
                <Text style={styles.textStyle}>setOptions - update the screen's options</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_setOptions.bind(this)}>setOptions update the screen's navigationbar colors</Text>
                <Text style={styles.textStyle}>addListener - subscribe to updates to events from the navigators</Text>
                <Text style={styles.buttonStyle} onPress={this.navigation_addListener.bind(this)}>addListener subscribe to updates to events</Text>
                <Text style={styles.textStyle}>setNativeProps - modify subview style</Text>
                <Text style={styles.buttonStyle} onPress={this.setNativeProps_test.bind(this)}>modify subview style by setNativeProps()</Text>
          </View>
        );
      }

      navigation_navigate() {
        this.props.navigation.navigate("stackThird",{
          itemId: 86,
          defualtTitle:'The Stack Third Scene',
          callback:(fullName)=>console.log(fullName),
        });
      }
      navigation_reset() {
        this.props.navigation.reset({
          index: 0,
          routes:[{name: "stackSecond", params:{title: 'Reset Scond Scene to Frist Scene'}}],
        });
      }
      navigation_goback() {
        this.props.navigation.goBack();
      }

      navigation_setParams() {
        this.props.navigation.setParams({title:'setParams() change params'});
        alert("call setParams() seccessfully");
      }
      navigation_dispatch() {
        this.props.navigation.dispatch({
          ...CommonActions.goBack(),
        });
      }
      navigation_setOptions() {
        this.props.navigation.setOptions({
          headerStyle: {
            backgroundColor: commonSet.rendomColor(), //配置时 默认的title
          },
          headerTintColor: commonSet.rendomColor(),
        }); 
      }
      navigation_addListener() {
        console.log('navigation_addListener() called');
        this.didBlurSubscription = this.props.navigation.addListener(
          'blur',
          e => {
            console.debug('blur', e);
          });
      }

      setNativeProps_test() {

        let textInputValue = null;

        if (this.isNewStyle) {
          this.refs.text2.setNativeProps({style:styles.buttonStyle});
          this.props.navigation.setOptions({
            title:this.props.navigation.title, //配置时 默认的title
            headerRight:this.props.navigation.headerRight, //配置时 默认的headerRight
          }); 
          textInputValue = this.props.navigation.title;
        }else{
          this.refs.text2.setNativeProps({style:styles.newButtonStyle});
          this.props.navigation.setOptions({
            title:this.state.inputValue, //设置输入的title
            headerRight: ()=>{
              return(
                <Button onPress={() => {
                  this.props.navigation.setOptions({title:this.props.route.params.title});
                }}
                  title="Info"
                  color="#fff"
                />
              );
            }, //配置时 默认的headerRight
          });
          textInputValue = this.state.inputValue;
        }

        this.setState({inputValue:textInputValue});

        this.textInput.setNativeProps({//modify subview style by setNativeProps()
          editable:this.isNewStyle,
        });

        this.isNewStyle = !this.isNewStyle;
      }
  }
  
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center'
      },
      buttonStyle: {
        paddingHorizontal:10,
        paddingVertical:8,
        width: dimensions.screenW - 40,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        fontSize:14,
        color:'black',
      },
      newButtonStyle: {
          fontSize: 20,
          color:'purple',
          backgroundColor:'beige',//米黄色
          
      },
      textStyle: {
        marginBottom:4,
        marginTop:8,
        width:dimensions.screenW,
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 12,
      },
      textInputStyle: {
        paddingHorizontal:10,
        marginVertical:10,
        width:300,
        height: 35,
        fontSize: 14,
        backgroundColor: 'lightgray',

        //shandow set
        shadowColor:'gray',
        shadowOffset:{
          height:1,
          width:2,
        },
        shadowOpacity:.7,
        shadowRadius:2,
      }
  });
  

  /**
 Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router. It looks like this:
navigation
  navigate - go to another screen, figures out the action it needs to take to do it
  reset - wipe the navigator state and replace it with a new routes
  goBack - close active screen and move back in the stack
  setParams - make changes to route's params
  dispatch - send an action to router
  setOptions - update the screen's options
  isFocused - check whether the screen is focused
  addListener - subscribe to updates to events from the navigators
   */