
'use strick'
//import component时 对应的 库自动加到 package.json  dependencies中
import React, { Component, PureComponent } from 'react';             
import { Text, View, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
// note:Notice the braces surrounding {this.props.name} - these embed the variable pic into JSX.
//  You can put any JavaScript expression inside braces in JSX.
// https://react-native.org/doc/props.html



/**
 * props  === property(属性)  子组件不能修改props，对自身来说props是只读的
 */
class Greeting extends PureComponent {
    //  static defaultProps 初始化在 constructor 之前， 故：constructor 可以使用 defaultProps 中的属性值

    // React 组件的构造函数在 挂载(mounted) 之前被调用。 在实现 React.Component 子类的构造函数时， 
    // 应该在任何其他声明之前调用super(props)。 
    // 否则，this.props 将在 constructor(构造函数) 中是 undefined(未定义) ，这将导致 bug 
    constructor(props){
        super(props);
        this.state={
            firstName: props.firstName,
            secondName: props.secondName,
        };   //this.state 初始化
    }


//设置默认属性
    static defaultProps={
        firstName: 'firstName',
        secondName: 'secondName',
    }

    render() {
        return(
            <View style={{alignItems:'center'}}>
                <Text>Hello {this.props.firstName} {this.props.secondName}!</Text>
            </View>
        );
    }

    // 1.component中 this.state 在 constructor中应初始化，否则 在 2 中 preState 为 null 
    // 2.在getDerivedStateFromProps中进行state的改变
    // 3.组件更新前后的状态都可以在componentDidUpdate中获取了
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.firstName !== prevState.firstName) {
            console.log(`---- receive props ${nextProps.firstName}  ----  prevState ${prevState.firstName} `);
            return {
                firstName: nextProps.firstName,
            };
        }
        return null;
    }
    //conponent 挂载后 调用
    componentDidMount(){
        console.log(`-------  componentDidMount  ----> ${this.state.firstName}`);
        if(this.props.callback != undefined){
            this.props.callback('Hello' + this.props.firstName + this.props.secondName + '!');
        }
    }

// pureComponent extends component 实现 shouldComponentUpdate 判断是否更新，减少因父控件的re-render 带来的 re-render
    // shouldComponentUpdate( nextProps, nextState , nextContext ){
    //     return Boolean;
    // }

    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
     * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
     */
    componentWillUnmount(){}
    /**
     * Catches exceptions generated in descendant components. Unhandled exceptions will cause
     * the entire component tree to unmount.
     */
    componentDidCatch( error, errorInfo){ }

    getSnapshotBeforeUpdate( prevProps, prevState ){

    }
    //每次更新后调用
    componentDidUpdate( prevProps, prevState, snapshot ){
        console.log(`-------  componentDidUpdate  ----> ${this.state.firstName}`);
    }

    /**
     * componentWillReceiveProps标记为deprecated的原因也并不是因为功能问题，而是性能问题。
     * 
     * 当外部多个属性在很短的时间间隔之内多次变化，就会导致componentWillReceiveProps被多次调用。
     * 这个调用并不会被合并，而setState()邻近的界面渲染会合并, 如果这次内容都会触发异步请求，那么可能会导致多个异步请求阻塞
     */
    componentWillReceiveProps(nextProps, nextContext){
        console.log(`this.props-->${JSON.stringify(this.props)}`);
        console.log(`nextProps-->${JSON.stringify(nextProps)}`);
        console.log(`nextContext-->${JSON.stringify(nextContext)}`);
    }
}

//属性设置类型  进行属性安全检测
Greeting.propTypes = {
    firstName:PropTypes.string.isRequired,
    secondName:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    callback:PropTypes.func,
    info:PropTypes.instanceOf(Object),//instanceOf(某个累的实例) 
}


/**
 * 父控件调用 setState() 刷新界面时，所有直接继承自 Component 的子控件被刷新，即使控件内容没有变化
 * 控件应尽量继承 PureComponent 只更新有变化的控件。
 */
export default class LotsfGreetings extends Component {

    constructor(props){
        super(props);
        this.state={R:false};
        this._btnPress.bind(this);
    }

    render(){
        let extendingOperator = { firstName:'Extending', secondName:'operator',};
        // 将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面.    属性名称相同
        let DeconstructAssignments = null;
        if(this.state.R){
            DeconstructAssignments = { firstName:'re', secondName:'new',}
        }else{
            DeconstructAssignments = { firstName:'Deconstructing', secondName:'assignments',}
        }
        let { firstName, secondName } = DeconstructAssignments;

        return(
            <View style={{alignItems:'center'}}>
                {/* 简单赋值 ref='组件名称'  this.refs.组件名称   来拿到相应的 component */}
                <Greeting ref="firstGreeting" firstName='Rexxar' secondName='Jaina' callback={(fullName)=>console.log(fullName)}/>         
                {/* 延展操作符(Extending operator)：...，延展操作符很方便，还可用于函数的可变参数传递 */}
                <Greeting {...extendingOperator} />
                {/* 对象的解构赋值(Deconstructing assignments)用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面.                        */}
                <Greeting firstName={firstName} secondName ={secondName}/>
                <Greeting />
                <TouchableHighlight style={{marginTop:30,padding:20,backgroundColor:'lightblue'}} onPress={this._btnPress}>
                    <Text>press btn</Text>
                </TouchableHighlight>
            </View>
        );
    }


    _btnPress = ()=>{
        this.setState((previousState)=>({
            R:!previousState.R,
        }));
    }
}


