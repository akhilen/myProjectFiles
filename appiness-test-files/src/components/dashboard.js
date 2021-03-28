import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { getUserData } from './action'

function Dashboard(props){
    const[user,setUser] = useState([])

    useEffect(()=>{
        setUser(props.userDetails)
    },[])

    return(
        <>
        {user.map((item,i)=>{
            return(
                    <div key={i} style={{marginBottom:"15px"}}>
                        <div>name : {item.name}</div>
                        <div>age : {item.age}</div>
                        <div>Gender : {item.gender}</div>
                        <div>email : {item.email}</div>
                        <div>phoneNo : {item.phoneNo}</div>
                    </div>
            )
        })}
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        userDetails : state.input.user
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        userdata : dispatch(getUserData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
