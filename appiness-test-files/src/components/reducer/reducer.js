import {INPUT_VALUE, ENTER_USERNAME,ENTER_PASSWORD,GET_USERDETAILS} from '../action/actionCreater'

let mainStore = {
    inputValue:{},
    error:{},
    user:[
        {
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314"
        },
        {
        "id":3,
        "name":"test3",
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"
        }
    ]
}

export const loginReducer = (state = mainStore, action) =>{
    switch(action.type){
        case INPUT_VALUE:
            let value = Object.assign({},state.inputValue,{[action.payLoad.name]:action.payLoad.value})    
            return{
                ...state,
                inputValue : value,
            }
        case ENTER_USERNAME: 
            let err = Object.assign({},state.error,{"emailerror":action.payload})       
            return{
                ...state,
                error : err
            }
        case ENTER_PASSWORD:
            let passerr = Object.assign({},state.error,{"passworderr":action.payload})
            return{
                ...state,
                error:passerr
            }
        case GET_USERDETAILS:
            return{
                ...state
            }
        default : return state;
    }
}


