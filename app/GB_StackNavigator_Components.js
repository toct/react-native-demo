"use strick"

import React, { PureComponent } from "react";
import { Button as Btn } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import { GB_Debug } from './common/GB_Common';


//The Basics
import Props from './test/t1-Props';
import State from './test/t2-State';
import Style from './test/t3-Style';
import Dimensions from './test/t4-Dimensions';
import LayoutWithFlexbox from './test/t5-LayoutWithFlexbox';
import HandlingTextInput from './test/t6-HandlingTextInput';
import HandlingTouches from './test/t7-HandlingTouches';
import ScrollView from './test/t8-ScrollView';
import SectionList from './test/t10-SectionList'
import Networking from './test/t11-Networking';

// Components
import ActivityIndicator from './test/t12-ActivityIndicator';
import Button from './test/t13-Button';
import DatePickerIOS from './test/t14-DatePickerIOS';
import DrawerLayoutAndroid from './test/t15-DrawerLayoutAndroid';
import FlatList from './test/t9-FlatList';
import Image from './test/t16-Image';
import ImageBackground from './test/t17-ImageBackground';
import InputAccessoryView from './test/t18-InputAccessoryView';
import KeyboardAvoidingView from './test/t19-KeyboardAvoidingView';
import MyMaskedView from './test/t20-MyMaskedView';
import Modal from './test/t21-Modal';
import Picker from './test/t22-Picker';
import RefreshControl from './test/t23-RefreshControl';
import safeAreaView from './test/t24-safeAreaView';
import StatusBar from './test/t25-StatusBar';
import TextInput from './test/t27-TextInput';

import TouchableHighlight from './test/t28-TouchableHighlight';
import VirtualizedList from './test/t29-VirtualizedList';
import WebView from './test/t30-WebView';
import AccessibilityInfo from './test/t31-AccessibilityInfo';
import Animated from './test/t32-Animated';


const sectionData = [
    { 
      title: 'Basics',
      data: [ 
        { 'key':'Props', 'value':Props },
        { 'key':'State', 'value':State },
        { 'key':'Style', 'value':Style },
        { 'key':'Dimensions', 'value':Dimensions },
        { 'key':'LayoutWithFlexbox', 'value':LayoutWithFlexbox },
        { 'key':'HandlingTextInput', 'value':HandlingTextInput },
        { 'key':'HandlingTouches', 'value':HandlingTouches },
        { 'key':'ScrollView', 'value':ScrollView },
        { 'key':'SectionList', 'value':SectionList },
        { 'key':'Networking', 'value':Networking },
      ],
    },
    { 
      title: 'Components',
      data: [ 
        { 'key':'ActivityIndicator', 'value':ActivityIndicator },
        { 'key':'Button', 'value':Button },
        { 'key':'DatePickerIOS', 'value':DatePickerIOS },
        { 'key':'DrawerLayoutAndroid', 'value':DrawerLayoutAndroid },
        { 'key':'FlatList', 'value':FlatList },
        { 'key':'Image', 'value':Image },
        { 'key':'ImageBackground', 'value':ImageBackground },
        { 'key':'InputAccessoryView', 'value':InputAccessoryView },
        { 'key':'KeyboardAvoidingView', 'value':KeyboardAvoidingView },
        { 'key':'MyMaskedView', 'value':MyMaskedView },
        { 'key':'Modal', 'value':Modal },
        { 'key':'Picker', 'value':Picker },
        { 'key':'RefreshControl', 'value':RefreshControl },
        { 'key':'safeAreaView', 'value':safeAreaView },
        { 'key':'StatusBar', 'value':StatusBar },
        { 'key':'TextInput', 'value':TextInput },
        { 'key':'TouchableHighlight', 'value':TouchableHighlight },
        { 'key':'VirtualizedList', 'value':VirtualizedList },
        { 'key':'WebView', 'value':WebView },
        { 'key':'AccessibilityInfo', 'value':AccessibilityInfo },
        { 'key':'Animated', 'value':Animated }
      ],
    },
];

const items = sectionData.map((item,idx) => {
    item.data.map((subItem, subIdx) =>{
      return <Stack.Screen name={subItem.key} component={subItem.value}/>
    });
});

export default class StackNavigation extends PureComponent{
    constructor(props){
        super(props);
                
        this.didFocusListener = props.navigation.addListener(
            'focus',
            (obj) => {
                console.log("components stack navigator didFocus start");
                // GB_Debug.Show( items );
            }
        );
    }

    renderStackScreen(item,index){
        return <Stack.Screen name={item.key} component={item.value}/> 
    }

    render(){
      const items = sectionData.map((item,idx) => {
        return item.data;
      });
     const components = [].concat.apply([], items);

      return(
        <Stack.Navigator  initialRouteName="SectionList" screenOptions={navigatorOptions}>

          {components.map((item,idx) => {
            return this.renderStackScreen(item,idx)
          })}

        </Stack.Navigator>
      );
    }
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
        <Btn onPress={() => {
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
