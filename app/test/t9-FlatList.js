import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 44
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={()=>{
            return(
              <Text style={{textAlign:'center', fontSize:24}}>Header</Text>
            );
        }}
        ListFooterComponent={()=>{
            return(
              <Text style={{textAlign:'center', fontSize:24}}>Footer</Text>
            );
        }}
        ItemSeparatorComponent={()=>{
            return(
              <View style={{height:1, backgroundColor:'gray'}}></View>
            );
        }} 
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item,index})=>{
          return (
            <TouchableOpacity key={index} onPress={this.clickItem.bind(this,item,index)}>
              <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

clickItem = function(item,index) {
  alert(item.key);
}


export default FlatListBasics;
