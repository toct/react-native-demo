"use strick"

import React, { Component } from "react";
import { Image, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import stackFrist from './GB_TestStack_FirstScene'
import stackSecond from './GB_TestStack_SecondScene';
import stackThird from './GB_TestStack_ThirdScene';

import { GB_Debug } from './common/GB_Common';

export default class StackNavigation extends Component{
  componentDidMount(){
    GB_Debug.Show(  this.props.navigation);
}
    render(){
        return(
            <Stack.Navigator initialRouteName='Home' screenOptions={navigatorOptions}>   
                <Stack.Screen name="stackFrist" component={stackFrist} options={homeSceneOptions}/>
                <Stack.Screen name="stackSecond" component={stackSecond} initialParams={{defualtTitle:'title'}}/>
                <Stack.Screen name="stackThird" component={stackThird}/>
            </Stack.Navigator>
        );
    }
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 40 }}
      source={require('./img/home.png')}
    />
  );
}

//用来定制头部信息、根据自己需要更改  
const navigatorOptions = {    
    headerStyle: {
       backgroundColor: 'purple',
       // 去掉下边框和阴影
       borderBottomWidth: 0,
       elevation: 0,
    },
    
    headerRight: ()=>{
      return(
        <Button onPress={() => {
          alert('This is a button!')
        }}
          title="Info"
          color= 'black'
        />
      );
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontSize: 18,
    }
}

const homeSceneOptions = (props) => ({
  title:'initial `Home` -- > HomeScene',
  headerTitle: props => <LogoTitle {...props} />,
  headerRight: ()=>{
    return(
      <Button onPress={() => {
        alert('This is a button!');
      }}
        title="Info"
        color="#fff"
      />
    );
  },
  headerLeft: ()=>{
      return(
        <Button onPress = {()=>{
          props.navigation.toggleDrawer();
      }} 
      title = "Drawer" 
      color = "#fff"/>);
  },
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});


/**
 * Each screen component in your app is provided with the navigation prop automatically
   * navigate - go to another screen, figures out the action it needs to take to do it
   * reset - wipe the navigator state and replace it with a new routes
   * goBack - close active screen and move back in the stack
   * setParams - make changes to route's params
   * dispatch - send an action to router
   * setOptions - update the screen's options
   * isFocused - check whether the screen is focused
   * addListener - subscribe to updates to events from the navigators
   * 
   * 
   * useNavigation() returns the navigation prop of the screen it's inside.
   * const navigation = useNavigation();
 */