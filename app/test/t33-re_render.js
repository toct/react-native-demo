import React, { Component, PureComponent, useCallback } from 'react';
import { View, Text } from 'react-native';

export default class Home1 extends PureComponent {
    render() {
        console.log('渲染根');
        return (
            <View style={{backgroundColor: 'white', marginTop: 100}}>
                <ComponentA/>
                <ComponentB/>
            </View>
        );
    }
}
class ComponentA extends PureComponent {
    render() {
        console.log('渲染A');
        return (
            <Text>组件A</Text>
        )
    }
}
class ComponentB extends PureComponent {
    constructor(props){
        super(props);
        // this.state = {renderr:false};
        var timer=null;
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            // this.setState(
            //     previousState=>({ renderr:!previousState.renderr }),
            // );
            this.forceUpdate(()=>{
                console.log('re-render success');
            });
        }, 3000);
    }
    componentWillUnmount(){
        this.timer&&clearInterval(this.timer);
    }
    
    render() {
        console.log('渲染B');
        return (
            <View>
                <Text>组件B</Text>
                <ComponentC/>
            </View>
        )
    }
}
class ComponentC extends PureComponent {
    render() {
        console.log('渲染C');
        return (
            <View>
                <Text>组件C</Text>
                <ComponentD/>
            </View>
        )
    }
}
class ComponentD extends PureComponent {
    render() {
        console.log('渲染D');
        return (
            <View>
                <Text>组件D</Text>
            </View>
        )
    }
    
}

