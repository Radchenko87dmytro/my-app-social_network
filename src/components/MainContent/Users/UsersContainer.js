import React from 'react';
import UsersClass from './UsersClass';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC  } from '../../../redux/users-reducer';

let mapStaeToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        } 
    }
}

export default connect(mapStaeToProps, mapDispatchToProps) (UsersClass);