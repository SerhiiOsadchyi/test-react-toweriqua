import React from 'react';

const SET_USERS = 'users-reducer/SET_USERS';
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'

const initialState = {
    users: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return ({
                ...state,
                users: action.users
            });
        default:
            return state
    }
};

export const setUsers = (users) => ({type: SET_USERS, users})

export const getUsers = () => async(dispatch) => {
    let response = await fetch('https://serhiiosadchyi.github.io/users.json');
    let users = await response.json();

    if(users.users) {
        dispatch(setUsers(users.users))
    } else return 'error'

};

export default usersReducer