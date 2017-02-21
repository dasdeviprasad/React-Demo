import React from 'react';

const SelectUser = (props) => {
    if(!props.selectedUser || !props.selectedUser.login){
        return<div>Not selected</div>
    } else {
        return <div>Selected <strong>{props.selectedUser.login}</strong></div>
    }
};

export default SelectUser;