import React from 'react';
import Users from './Users';
import SelectedUser from './SelectedUser';
import AddUser from './AddUser';
import axios from 'axios';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedUser: {}
        };
    }
    
    componentDidMount(){
        let promise = axios.get('https://api.github.com/users');
        promise.then((response) => {
            this.props.userFetched(response.data);
        });
    }
    addMyUser(newUserObj){
        this.props.addUser(newUserObj);
    }
    setSelectedUser(user){
        this.setState({
            selectedUser: user
        });
    }
    render(){
        return <div>
                This is the Content
                <Users 
                    users={this.props.users}
                    setSelectedUser={this.setSelectedUser.bind(this)} 
                    />
                <AddUser addUser={this.addMyUser.bind(this)} />
                <SelectedUser selectedUser={this.state.selectedUser} />
            </div>
    }
}

export default Content;
