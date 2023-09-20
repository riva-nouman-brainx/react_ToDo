import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: localStorage.getItem("currentUser"),
    emailError: null,
    passError: null,
    success: false
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login: (state, action) => {
            if (localStorage.getItem(action.payload.email) != null) {
                //password
                const userData = JSON.parse(localStorage.getItem(action.payload.email));
                if (userData.password === action.payload.password) {
                    localStorage.setItem("currentUser", JSON.stringify(userData))

                    return ({
                        ...state,
                        user: userData,
                        emailError: null,
                        passError: null,
                        success: true
                    })


                } else {
                    localStorage.setItem("currentUser", null)
                    return ({
                        ...state,
                        user: null,
                        emailError: null,
                        passError: "Incorrect Password",
                        success: false
                    })
                }
            }
            else {
                return ({
                    ...state,
                    user: null,
                    emailError: "Invalid Email",
                    passError: null,
                    success: false
                })
            }

        }
        , logout: (state) => {
            localStorage.removeItem("currentUser")
            return ({
                ...state,
                user: null,
                emailError: null,
                passError: null,
                success: true
            })

        }
        , forgotPass: (state, action) => {
            if (localStorage.getItem(action.payload.email) != null) {
                const userData = JSON.parse(localStorage.getItem(action.payload.email));
                localStorage.setItem("forgotUser", JSON.stringify(userData))
                return ({
                    ...state,
                    user: userData,
                    emailError: null,
                    passError: null,
                    success: true
                })
            } else {
                return ({
                    ...state,
                    user: null,
                    emailError: "Email doesn't exist",
                    passError: null,
                    success: false
                })
            }

        }
        , resetPass: (state, action) => {
            console.log("hi");
            console.log(action.payload);

            if (localStorage.getItem("forgotUser") != null) {
                const userData = JSON.parse(localStorage.getItem("forgotUser"));
                const temp = JSON.parse(localStorage.getItem(userData.email));
                temp.password = action.payload.password;
                localStorage.setItem(userData.email, JSON.stringify(temp))
                localStorage.removeItem("forgotUser")

                return ({
                    ...state,
                    user: temp,
                    emailError: null,
                    passError: null,
                    success: true
                })
            }
            else {
                return ({
                    ...state,
                    user: null,
                    emailError: null,
                    passError: null,
                    success: false
                })

            }
        }
    }
});

export default userSlice.reducer
export const { login, logout, forgotPass, resetPass } = userSlice.actions
export const getUser = (state) => state.users.user
export const getEmailError = (state) => state.users.emailError
export const getPassError = (state) => state.users.passError
export const getSuccess = (state) => state.users.success
