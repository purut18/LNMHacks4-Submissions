import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://159.65.158.4:3001/api/StartUps/login', {
            email: email,
            password: password
        }).then(response => {
                localStorage.setItem('token', response.data.id);
                dispatch(authSuccess(response.data.token));
        }).catch(err => {
            dispatch(authFail(err + "There was an error, please try again later."));
        });
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    
    return {
        type: actionTypes.LOGOUT
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
             dispatch(logout());
        } else {
            dispatch(authSuccess(token));
        }
    };
};