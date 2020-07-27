// 分组  sectionlist
import React, { PureComponent } from 'react';
import { 
  SectionList, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions as Dim, 
  SafeAreaView, 
  RefreshControl as PullDownToRefresh, 
} from 'react-native';

import { 
  TouchableHighlight as Btn 
} from 'react-native-gesture-handler';



//The Basics
import Props from './t1-Props';
import State from './t2-State';
import Style from './t3-Style';
import Dimensions from './t4-Dimensions';
import LayoutWithFlexbox from './t5-LayoutWithFlexbox';
import HandlingTextInput from './t6-HandlingTextInput';
import HandlingTouches from './t7-HandlingTouches';
import ScrollView from './t8-ScrollView';
import Networking from './t11-Networking';

// Components
import ActivityIndicator from './t12-ActivityIndicator';
import Button from './t13-Button';
import DatePickerIOS from './t14-DatePickerIOS';
import DrawerLayoutAndroid from './t15-DrawerLayoutAndroid';
import FlatList from './t9-FlatList';
import Image from './t16-Image';
import ImageBackground from './t17-ImageBackground';
import InputAccessoryView from './t18-InputAccessoryView';
import KeyboardAvoidingView from './t19-KeyboardAvoidingView';
import MyMaskedView from './t20-MyMaskedView';
import Modal from './t21-Modal';
import Picker from './t22-Picker';
import RefreshControl from './t23-RefreshControl';
import safeAreaView from './t24-safeAreaView';
import StatusBar from './t25-StatusBar';
import TextInput from './t27-TextInput';

import TouchableHighlight from './t28-TouchableHighlight';
import VirtualizedList from './t29-VirtualizedList';
import WebView from './t30-WebView';
import AccessibilityInfo from './t31-AccessibilityInfo';
import Animated from './t32-Animated';

let {sectionListH, sectioListW } = Dim.get('screen'); 

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
]


export default class MainSectionList extends PureComponent {

  constructor(Props){
    super(Props);
    this.state = { isRefreshing:false };
  }





  _itemSeparatorComponent=()=>{
    return(
      <View style={styles.itemSeparator}>
      </View>
    );
  }
  _listEmptyComponent=()=>{
    return(
      <View style={styles.emptylist} height={sectionListH}>
        <Text style={{fontSize:24,color:'blue'}}>nothing</Text>
      </View>
    );
  }
  _listFooterComponent=()=>{
    return(
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    );
  }
  _listHeaderComponent=()=>{
    return(
      <View style={styles.header}>
        <Text>header</Text>
      </View>
    );
  }
  _sectionSeparatorComponent=()=>{
    return(
      <View style={styles.sectionSeparator}>
      </View>
    );
  }
  _renderItem=({item})=>{
    return(
      <Btn onPress={this._itemPress.bind(this,item)}>
        <View style={styles.item}>
          <Text>{item['key']}</Text>
        </View>
      </Btn>
    );
  }
  _renderSectionHeader = ({section})=>{
    return(
    <View style={styles.sectionHeader}>
      <Text style={{color:'white', fontSize: 20}}>{section.title}</Text>
    </View>);
  }
  _renderSectionFooter = ()=>{
    return null;
  }


  render(){
    return(
      <SafeAreaView style={styles.container}>
        <SectionList style={styles.list} onLayout={this._listOnLayout.bind(this)}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          ListEmptyComponent={this._listEmptyComponent}
          ListFooterComponent={this._listFooterComponent}
          ListHeaderComponent={this._listHeaderComponent}
          SectionSeparatorComponent={this._sectionSeparatorComponent}
          sections={sectionData} 
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          renderSectionFooter={this._renderSectionFooter}
          refreshControl={this._pullDownToRefresh()}
        />
      </SafeAreaView>
    );
  }



  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidMount(){
    let newArray = JSON.parse(JSON.stringify(sectionData));
      this.setState({
          cellDataArray:newArray
      })
    console.log('componentDidMount');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  componentDidCatch(error, errorInfo){
    console.log('componentDidCatch');
    if(error){
      console.log(errorInfo.componentStack);
    }
  }








  _listOnLayout=(e) => {
    let height = e.nativeEvent.layout.height;
    sectionListH = height - 80;
    console.log(sectionListH);
    this.forceUpdate(()=>{console.log('re-render sectionlist callback')});
  }
  _itemPress = (item)=>{
    alert(item['value']);
  }
  _pullDownToRefresh = ()=>{
    return(
      <PullDownToRefresh
          refreshing={this.state.isRefreshing}
          onRefresh={this._listOnRefresh.bind(this)}
          colors={['red', 'blue', 'green']}
          progressBackgroundColor='#ffff00'
          enabled={true}
        />
    );
  }
  _listOnRefresh = ()=>{
    console.log('_listOnRefresh true');
    this.setState({
      isRefreshing:true,
    });
    
    this.refreshing(2000).then(() => {
      console.log('_listOnRefresh false');
      this.setState({
        isRefreshing:false,
      });
    });
  }


  refreshing = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
   flex: 1,
  },
  emptylist:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e7e7e7',
  },
  sectionSeparator:{
    height:3,
    backgroundColor:'red',
  },
  sectionHeader:{
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'purple',
  },
  itemSeparator:{
    height:1,
    backgroundColor:'gray',
  },

  header:{
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink',
  },
  footer:{
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink',
  },
  item:{
    height:40,
    paddingLeft:25,
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:'pink',
  },
})


    /**
     * 
     * 设置 ListEmptyComponent 组件 flex:1 或者给定固定高度，点击 ListEmptyComponent 区域重新获取数据，暂无数据居中显示，
     * 但是实际情况，你发现无论 flex:1，还是设定100%，都不起作用，它无法撑起空间，达不到我们等预期。
     * 经过测试，我们发现设定固定数组等高度是有效果的
     * 
     * 将 ListEmptyComponent 中组件的高度设置为 FlatList 的高度，要获取 FlatList 的高度，我们可以通过 onLayout 方法获取
     * 
     * onLayout：当组件挂载或者布局变化的时候调用，参数为：
     * {nativeEvent: { layout: {x, y, width, height}}}
     * 这个事件会在布局计算完成后立即调用一次，不过收到此事件时新的布局可能还没有在屏幕上呈现，尤其是一个布局动画正在进行中的时候。

     * */