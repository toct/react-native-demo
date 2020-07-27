import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ThirdScene extends Component {
    constructor(props){
        super(props);

        this.backToPreviousPage.bind(this);//绑定不起作用？？？？？
    }

    componentDidMount(){
        const passobj = this.props.route.params; //取出传递过来的值，
        this.props.navigation.setOptions({
            title:passobj.defualtTitle,
        });
    }


    backToPreviousPage () {
        this.props.navigation.goBack();
    }

    backToRootPage () {
        this.props.navigation.popToTop();
        this.props.route.params.callback('back to home');
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <!--这样可以绑定 ？？？> */}
                <Text style={styles.buttonStyle} onPress={this.backToPreviousPage.bind(this)}> 
                    back to previous page
                </Text>

                <Text style={styles.buttonStyle} onPress = {this.backToRootPage.bind(this)}>
                    back to root page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonStyle:{
        marginTop:40,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'lightblue',
    }
});