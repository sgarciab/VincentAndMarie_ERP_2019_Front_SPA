import { GET_ERRORS,SET_CURRENT_USER , SET_SUCCESS_CREDENTIALS} from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../../utils/setAuthToken';

// user register
export const registerUser = (userData, history) =>
    async dispatch=>{
        axios.post('/api/users/register',userData)
            .then(res=> history.push('/login'))
            .catch(err =>{
                dispatch({type: GET_ERRORS, payload: err.response.data})
            });
    }

// Login user -- get token
export const loginUser = (userData) =>
    async dispatch =>{
         axios.post('/auth/login',userData)
              .then(res=>{

                  dispatch(setSuccessCredentials());

              }).catch(err =>{
                dispatch({type: GET_ERRORS, payload: err.message})
              });
    }

// Login user -- get token
export const loginToken = (userData) =>
async dispatch =>{
     axios.post('/auth/token',userData)
          .then(res=>{
            const {access_token,refresh_token } = res.data;
           
            // Set token to Auth Header
            let decoded = jwt_decode(access_token);
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            setAuthToken(access_token);
            dispatch(setCurrentUser(decoded));

          }).catch(err =>{
            dispatch({type: GET_ERRORS, payload: err.message})
          });
        }
// set logged in user
export const setSuccessCredentials = () =>{
    return{
        type: SET_SUCCESS_CREDENTIALS
    }
}

// set logged in user
export const setCurrentUser = decoded =>{
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// set logout user
export const logoutUser = () => dispatch =>{
    // remove jwtToken from localStorage
    localStorage.removeItem('jwtToken');
    // remove auth header for future request
    setAuthToken(false);
    // Set current user to {} and isAuthenticated to false
    dispatch(setCurrentUser({}));

}

