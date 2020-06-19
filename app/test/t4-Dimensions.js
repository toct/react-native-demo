// All dimensions in React Native are unitless, and represent density-independent pixels.

import React, { Component } from 'react';
import { View } from 'react-native';

class DimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
/**
 * A component can only expand to fill available space if its 
 * parent has dimensions greater than 0. If a parent does not 
 * have either a fixed width and height or flex, the parent will 
 * have dimensions of 0 and the flex children will not be visible.
 */

export default class FlexDimensionsBasics extends Component {
    render() {
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{flex:1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  }