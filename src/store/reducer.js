
import {CHANGEVALUE,ADDVALUE,DELVALUE,AXIOSDATA} from "./actionTypes"
const defaultState = {
    inputValue:"请输入你喜欢的女优",
    data:[
      
    ]
} //默认数据
export const reducer= (state=defaultState,action) => {
    // console.log(state,action)
    if(action.type === CHANGEVALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState

    }
    if(action.type === ADDVALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.push(state.inputValue)
        return newState
    }
    if(action.type === DELVALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.index,1)
        return newState
    }
    if(action.type === AXIOSDATA){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data = action.data
        return newState
    }

    return state
}