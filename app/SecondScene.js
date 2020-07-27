import React, { Component } from 'react';
import  {
    StyleSheet,
    Text,
    View,
    TextInput
  } from 'react-native';
  
  export default class SecondScene extends Component {
      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          inputValue: '',
        };
        this.buttonPressed = this.buttonPressed.bind(this);
        this.isNewStyle = false;
      }
  
      buttonPressed() { //当按钮按下的时候执行此函数

        let textInputValue = null;

        if (this.isNewStyle) {
          this.refs.text2.setNativeProps({style:styles.buttonStyle});
          textInputValue = this.props.navigation.title;
        }else{
          this.refs.text2.setNativeProps({style:styles.newButtonStyle});
          textInputValue = this.state.inputValue;
        }

        this.setState({inputValue:textInputValue});

        this.textInput.setNativeProps({
          editable:this.isNewStyle,
        });


        this.props.navigation.setOptions({title:textInputValue,});


        this.isNewStyle = !this.isNewStyle;
      }
  
      render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle}
                  ref={element=>this.textInput = element}
                  value={this.state.inputValue}
                  placeholder='navigation title'
                  placeholderTextColor='gray'
                  onChangeText={(textInputValue)=>{
                    this.setState({inputValue:textInputValue});
                  }}
                />


                <Text style={styles.buttonStyle} onPress={this.buttonPressed}>
                    modify subview style by setNativeProps()
                </Text>
                <Text style={styles.buttonStyle} ref="text2" onPress={this._goback.bind(this)}>
                    back to previous page
                </Text>
              <View>
                
              </View>
              <Text style ={styles.buttonStyle} onPress = {()=>{
                this.props.navigation.navigate("ThirdScene",{
                  itemId: 86,
                  defualtTitle:'SecondSceneDetail',
                  callback:(fullName)=>console.log(fullName),
                });
              }}>
                go to next page pass parameters
              </Text>

          </View>
        );
      }

      _goback(){
        this.props.navigation.goBack();
      }
  }
  
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center'
      },
      buttonStyle: {
        marginVertical:10,
        paddingHorizontal:25,
        paddingVertical:10,
        backgroundColor: 'lightblue',
        fontSize:14,
        color:'black',
      },
      newButtonStyle: {
          fontSize: 20,
          color:'purple',
          backgroundColor:'beige',//米黄色
          
      },
      textInputStyle: {
        paddingHorizontal:20,
        marginVertical:60,
        width:300,
        height: 40,
        fontSize: 20,
        backgroundColor: 'lightgray',

        //shandow set
        shadowColor:'gray',
        shadowOffset:{
          height:1,
          width:2,
        },
        shadowOpacity:.7,
        shadowRadius:2,
      }
  });
  