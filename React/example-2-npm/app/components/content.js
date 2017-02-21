import React from 'react';
import Axios from 'axios';

import Users from './users';
import AddUser from './adduser';
import SelectUser from './selecteduser';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [], 
            selectedUser: {}
        };
    }

    componentDidMount() {
        let promise = Axios.get('https://api.github.com/users');
        promise.then((response) => {
            this.setState({
                users: response.data
            })
        })
    }

    selectUser(user) {
        this.setState({
            selectedUser: user
        })
    }

    addNewUser(newUser) {
        let newUsers = this.state.users.concat([newUser]);

        this.setState({
            users: newUsers
        });
    }

    render() {
        return <div>
                    <SelectUser selectedUser={this.state.selectedUser} />
                    <Users users={this.state.users} setSelectedUser={this.selectUser.bind(this)} />
                    <AddUser addUser={this.addNewUser.bind(this)} />
               </div>;
    }
}