import history from '../history';

export const INPUT_VALUE = "INPUT_VALUE";
export const VALIDATE_USERNAME = "VALIDATE_USERNAME";
export const ENTER_USERNAME = "ENTER_USERNAME";
export const VALIDATE_PASSWORD = "VALIDATE_PASSWORD";
export const ENTER_PASSWORD = "ENTER_PASSWORD";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const GET_USERDETAILS = "GET_USERDETAILS";

/*******collecting the userEntered details*******/
export const inputValue = (e) =>{
    return{
        type:INPUT_VALUE,
        payLoad:e.target
    }
}

/*******Email validations *******/
export const enterUserNameError = (errMsg) =>{
    return{
        type:ENTER_USERNAME,
        payload: errMsg
    }
}

export const validateUserName = (name) =>{
    return (dispatch) =>{
        if(name === undefined){
            dispatch(enterUserNameError("please enter emailID"))
        }else{
            let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(pattern.test(name)){
                if(name === "hruday@gmail.com"){
                    dispatch(enterUserNameError(""))
                    return true;
                }else{
                    dispatch(enterUserNameError("Incorrect mailID"))
                    return false;
                }

            }else{
                dispatch(enterUserNameError("please enter valid emailID"))
            } 
        }
    }
}

/*******password validations *******/
export const enterPasswordError = (errMsg) =>{
    return{
        type : ENTER_PASSWORD,
        payload: errMsg,
    }
}

export const validatePassword = (password) =>{
    return (dispatch) =>{
        if(password === undefined){
            dispatch(enterPasswordError("please enter password"))
        }else{
            if(password.length > 2){
                if(password === "hruday123"){
                    dispatch(enterPasswordError(""))
                    return true;
                }else{
                    dispatch(enterPasswordError("Incorrect Password"))
                    return false;
                }

            }else{
                dispatch(enterPasswordError("please enter valid password"))
            } 
        }
    }
}

/*******submit login Details*******/
export const submitLoginDetails = (email,password) =>{
    return (dispatch) =>{
        let emailStatus = dispatch(validateUserName(email))
        let passwordStatus = dispatch(validatePassword(password))
        if(emailStatus && passwordStatus){
            history.push('/dashboard')
        }
    }
}

/*******Getting user Details*******/
export const getUserData = () =>{
    return{
        type:GET_USERDETAILS
    }
}
