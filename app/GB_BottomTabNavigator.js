import React, { Component } from 'react';
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import stackNavigation from "./GB_StackNavigator"
import settingTab from './TabSettings';
import components from './GB_StackNavigator_Components';


import { GB_Debug } from './common/GB_Common';


const Tab = createBottomTabNavigator();

export default class TabHome extends Component {

    componentDidMount(){
        GB_Debug.Show( this.props.navigation);
    }
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Stack Test" component={stackNavigation}/>
                <Tab.Screen name="components" component={components} 
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                        // GB_Debug.Show(e);
                        // Do something with the `navigation` object

                        Alert.alert(
                            'Show Components Test?',
                            'Do you want to show components test tab?',
                            [
                              { text: "No,Don't Show", style: 'cancel', onPress: () => {navigation.navigate('Setting');} },
                              {
                                text: 'Show',
                                style: 'destructive',
                                // If the user confirmed, then we dispatch the action we blocked earlier
                                // This will continue the action that had triggered the removal of the screen
                                // onPress: () => navigation.dispatch(e),
                                onPress: () => {navigation.navigate('components');}
                              },
                            ]
                          );
                    },
                })}/>
                <Tab.Screen name="Setting" component={settingTab}/>
            </Tab.Navigator>
        );
    }
}