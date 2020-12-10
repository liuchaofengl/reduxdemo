import React from 'react';
import {Button,Input,List} from "antd";
const TodoListUI = (props) => {
    return (
        <div>
        <div style={{display:"flex"}}>
            < Input onChange={props.changeValue}  placeholder={props.inputValue}  />
            <Button type="primary" onClick={props.addValue}>添加</Button>
        </div>
        <div style={{marginLeft:'10px'}}>
            <List
                dataSource={props.data}
                renderItem={(item,index) => (
                        <List.Item onClick={() => {props.delValue(index)}}>{item}</List.Item>
                    )
                   
                }
            />
        </div>
    </div>
    )
}

 
export default TodoListUI;