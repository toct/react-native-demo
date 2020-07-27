"use strick"

import React, { Component } from "react";

import { NavigationContainer } from '@react-navigation/native';

import DrawerScene from './GB_DrawerNavigation';

export default class APP extends Component{
  render(){
    return(
      <NavigationContainer>
      <DrawerScene />
    </NavigationContainer>
    );
  }
}




