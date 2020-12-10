import {CHANGEVALUE,ADDVALUE,DELVALUE,AXIOSDATA} from "./actionTypes"
import axios from "axios"
export const changeValueAction = (value) => ({
    type:CHANGEVALUE,
    value
})
export const addValueAction = () => ({
    type:ADDVALUE,
    
})
export const delValueAction = (index) => ({
    type:DELVALUE,
    index
    
})  
export const AxiosDataListAction = (data) => ({
    type:AXIOSDATA,
    data
    
})
//可以返回方法的action
export const AxiosDataFun = () => {
    return (dispatch) => {
        axios.get('/list')
        .then((res) =>{
            console.log(res)
            const action = AxiosDataListAction(res.data.data.list)
            dispatch(action)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

    