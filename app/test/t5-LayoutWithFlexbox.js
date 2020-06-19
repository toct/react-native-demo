/**
 * A component can specify the layout of its children using the flexbox algorithm. 
 * Flexbox is designed to provide a consistent layout on different screen sizes.
 * 
 * You will normally use a combination of flexDirection, alignItems, 
 * and justifyContent to achieve the right layout.
 */

 /**
  * Flex Direction
  * 
  * Adding flexDirection to a component's style determines the primary axis of its layout.
  *  Should the children be organized horizontally (row) or vertically (column)? 
  * The default is column.
  */


 import React, { Component } from 'react';
 import { View, Text } from 'react-native';
 
 export default class FlexDirectionBasics extends Component {
   render() {
     return (
         <View style={{ flex:1, flexDirection:'column'}}>
            <View style={{ flex:1, backgroundColor:'pink', flexDirection:'column',  justifyContent:'space-evenly'}}>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} />
                </View>
            </View>
         </View>

     );
   }
}
         