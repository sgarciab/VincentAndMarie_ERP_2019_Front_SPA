import { SET_CURRENT_USER, SET_SUCCESS_CREDENTIALS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    isAuthenticating:false,
    user: {}
}

export default function(state= initialState, action){
    switch(action.type){  
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                isAuthenticating:false,
                user: action.payload
            }
        case SET_SUCCESS_CREDENTIALS:
            return{
                ...state,
                isAuthenticating: true,
                isAuthenticated:false
            } 
        default:
            return state;
    }
}