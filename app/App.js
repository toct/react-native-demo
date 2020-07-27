"use strick"

import React from "react";
import { Image, Button, Text, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import {  
//     // createStackNavigator,
//     TabNavigator,
//     StackNavigator,
//     TabBarBottom,
// } from '@react-navigation'

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




let drawerWidth = Dimensions.get('window').width;






import Home from './Home';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';
import OtherDrawerContent from './OtherDrawCotent'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



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
        <Button onPress={() => alert('This is a button!')}
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

const homeSceneOptions = {
  title:'initial `Home` -- > HomeScene',
  headerTitle: props => <LogoTitle {...props} />,
  headerRight: ()=>{
    return(
      <Button onPress={(ev) => {
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
          this.props.navigation
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
};


const drawerOptions = {
  title:"sss",
  drawerLabel:()=>{
    return (<Text>
      sss
    </Text>);
  }
};



function StackComponent() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={navigatorOptions}>   
      <Stack.Screen name="Home" component={Home} options={homeSceneOptions}/>
      <Stack.Screen name="SecondScene" component={SecondScene} />
      <Stack.Screen name="ThirdScene" component={ThirdScene} />
    </Stack.Navigator>
  );
}



function APP () {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="stack" screenOptions={drawerOptions}>
        <Drawer.Screen name="stack" component={StackComponent}/>
        <Drawer.Screen name="other" component={OtherDrawerContent}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default APP;

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



