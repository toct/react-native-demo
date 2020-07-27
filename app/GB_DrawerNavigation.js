"use strick"

import React, { Component } from "react";
import { Image, Button, Text, Dimensions } from 'react-native';

import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, 
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import bottomTabNavigator from './GB_BottomTabNavigator';
import otherScene from "./OtherDrawCotent"

export default class DrawerNavigation extends Component{
    render(){
        return(
        <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="stack" screenOptions={drawerOptions}>
            <Drawer.Screen name="bottomTab" component={bottomTabNavigator}/>
            <Drawer.Screen name="other" component={otherScene}/>
        </Drawer.Navigator>
        );
    }
}


function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="React Native Basics"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="React Native Components"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
  

  //用来定制头部信息、根据自己需要更改  
const drawerOptions = {    
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
          color="#fff"
        />
      );
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontSize: 18,
    }
}


//The Basics
// import test from './test/t1-Props';
// import test from './test/t2-State';
// import test from './test/t3-Style';
// import test from './test/t4-Dimensions';
// import test from './test/t5-LayoutWithFlexbox';
// import test from './test/t6-HandlingTextInput';
// import test from './test/t7-HandlingTouches';
// import test from './test/t8-ScrollView';
// import test from './test/t9-FlatList';
// import test from './test/t10-SectionList';
// import test from './test/t11-Networking';

// Components
// import test from './test/t12-ActivityIndicator';
// import test from './test/t13-Button';
// import test from './test/t14-DatePickerIOS';
// import test from './test/t15-DrawerLayoutAndroid';
// import test from './test/t9-FlatList';
// import test from './test/t16-Image';
// import test from './test/t17-ImageBackground';
// import test from './test/t18-InputAccessoryView';
// import test from './test/t19-KeyboardAvoidingView';
// import test from './test/t20-MyMaskedView';
// import test from './test/t21-Modal';
// import test from './test/t22-Picker';
// import test from './test/t23-RefreshControl';
// import test from './test/t24-safeAreaView';
// import test from './test/t25-StatusBar';
// import test from './test/t27-TextInput';

// import test from './test/t28-TouchableHighlight';
// import test from './test/t29-VirtualizedList';
// import test from './test/t30-WebView';
// import test from './test/t31-AccessibilityInfo';
// import test from './test/t32-Animated';

// import test from './test/t33-re_render';

