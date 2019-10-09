import {AUTHENTICATION_REMEMBER, AUTHENTICATION_SUCCESS} from "./types";

const initialState = {isAuthenticated: false, rememberPassword: false};


export default function(state = initialState, action){
    if (action.type === AUTHENTICATION_REMEMBER){
        return{...state, rememberPassword: action.data}
    }
    if (action.type === AUTHENTICATION_SUCCESS){

        if (state.rememberPassword)
            localStorage.setItem("token", action.data);
        else
            sessionStorage.setItem("token", action.data);

        return{...state, isAuthenticated: true}
    }
    return state;

}
