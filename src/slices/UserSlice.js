import { current } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';
import { useActionData } from "react-router-dom"
const initialState={
    user: localStorage.getItem("currentUser"),
    error:null, 
    success:false
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login: (state, action) =>{
            if(localStorage.getItem(action.payload.email)!=null){
                //password
                const userData = JSON.parse(localStorage.getItem(action.payload.email));
                if(userData.password===action.payload.password){
                    localStorage.setItem("currentUser", JSON.stringify(userData))
                    console.log(localStorage.getItem("currrentUser"));

                    return({
                        ...state,
                        user:userData,
                        error:null,
                        success:true
                    })                   

                 
                }else{
                    localStorage.setItem("currentUser", null)
                    return({
                        ...state,
                        user:null,
                        error: "Incorrect Password",
                        success:false
                    })  
                   
                }
              }
              else{
                return({
                    ...state,
                    user:null,
                    error: "Invalid Email",
                    success:false
                })
              }

        }
        ,logout: (state) =>{
            localStorage.removeItem("currentUser")
            return ({
                ...state,
                user:null,
                error:null,
                success:true
            })
           
        }

    }
})

export default userSlice.reducer
export const {login, logout} = userSlice.actions
export const getUser = (state) => state.users.user
export const getError = (state) => state.users.error
export const getSuccess = (state) => state.users.success