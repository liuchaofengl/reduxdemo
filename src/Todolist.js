
import React, { Component,} from 'react';

import 'antd/dist/antd.css';
import store from "./store"
import {changeValueAction,addValueAction,delValueAction,AxiosDataFun} from './store/actionCreators'
import TodoListUI from "./TodoListUI.js"
import './mock/index'
import {connect} from "react-redux"

class Todolist extends Component {
    constructor(props){
        super(props)
    }
    远端获取数据
    componentDidMount(){
        const action = AxiosDataFun()
        store.dispatch(action)
    }
  
    render() { 
        return ( 
            <TodoListUI
                changeValue={this.props.changeValue}
                inputValue = {this.props.inputValue}
                addValue = {this.props.addValue}
                data={this.props.list}
                delValue = {this.props.delValue}
            />
         );
    }
   
   
}
const stateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.data
    }
}
const dispatchToProps = (dispatch) => {
    return {
        //改变输入框输入内容
        changeValue(e){
      
            const action = changeValueAction(e.target.value)
            
            
            dispatch(action)
        
        },
         //添加数据到数组
        addValue(){
            const action = addValueAction()
                

            
            dispatch(action)
        },
         //删除数据
        delValue(index){
            const action = delValueAction(index)
            
            
            dispatch(action)
        }

    }
}
 
export default connect(stateToProps,dispatchToProps)(Todolist);