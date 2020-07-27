import React, { Component } from 'react';
// import { Text, View, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeTab from './TabHome'
import settingTab from './TabSettings'

const Tab = createBottomTabNavigator();

// export default class Home extends Component {
//     render(){
//         return(
//             <View style={{ flex:1,alignItems:'center', justifyContent:'center',}}>
//                 <TouchableHighlight onPress={this._goTNext.bind(this)}>
//                     <Text style={{ paddingVertical:10,paddingHorizontal:25,backgroundColor:'lightblue'}}>go to Notifications</Text>
//                 </TouchableHighlight>
//             </View>

//         );
//     }

//     _goTNext = ()=>{
//         this.props.navigation.navigate('SecondScene');
//     }
// }

export default class TabHome extends Component {
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="home tab" component={homeTab}/>
                <Tab.Screen name="setting tab" component={settingTab}/>
            </Tab.Navigator>
        );
    }
}