import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import stackNavigation from "./GB_StackNavigator"
import test from './test/t10-SectionList';
import settingTab from './TabSettings'

const Tab = createBottomTabNavigator();

export default class TabHome extends Component {
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Core Components Test" component={test}/>
                <Tab.Screen name="Stack Test" component={stackNavigation}/>
                <Tab.Screen name="Setting" component={settingTab}/>
            </Tab.Navigator>
        );
    }
}