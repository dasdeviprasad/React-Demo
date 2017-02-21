import React from 'react';
import Content from '../components/content';
import {connect} from 'react-redux';

function mapStateToProps (state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        userFetched: function(users) {
            dispatch({
                type: 'USER_FETCHED', 
                item: users
            })
        }, 
        addUser: function(user){
            dispatch({
                type: 'ADD_USER', 
                item: user
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
