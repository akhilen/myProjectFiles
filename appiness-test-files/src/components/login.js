import React from 'react'
import { connect } from 'react-redux';
import { validateUserName,inputValue,validatePassword,submitLoginDetails } from './action/index'

function Login(props){
    return(
        <>
        <form>
            <div>
               <label>Username</label>
               <input 
                    type="text" 
                    name="email" 
                    value={ props.inputData.email || ''}
                    onChange={(e) =>props.getInputValue(e)}
                    onBlur={() =>props.userNameValidate(props.inputData.email)} 
                />
                <span>{props.errorsdata.emailerror}</span>
            </div>
            <div>
               <label>Password</label>
               <input 
                    type="password"
                    name="password"
                    value={props.inputData.password || ''}
                    onChange={(e) =>props.getInputValue(e)}
                    onBlur={() =>props.passWordValidate(props.inputData.password)} 
                />
                <span>{props.errorsdata.passworderr}</span>
            </div>
            <button type="button" onClick={() => props.userLogin(props.inputData.email,props.inputData.password)}>Login</button>
        </form>
        </>

    )
}

const mapStateToProps = (state) =>{
 return{
     inputData:state.input.inputValue,
     errorsdata:state.input.error,
 }
}

const mapDispatchToProps = dispatch =>{
    return{
        userNameValidate:(username)=>dispatch(validateUserName(username)),
        passWordValidate:(password)=>dispatch(validatePassword(password)),
        getInputValue:(e)=>dispatch(inputValue(e)),
        userLogin:(email,password)=>dispatch(submitLoginDetails(email,password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)