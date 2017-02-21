import React,{Component} from 'react';
import {Link} from 'react-router';
import UserStore from '../stores/UserStore';

class Header extends Component{
    constructor(props){
        super(props);

        this.state ={
            userCount: UserStore.getUsers().length
        }

        UserStore.addChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            userCount: UserStore.getUsers().length
        })
    }
    render(){
        return <div>
            <h1>User List</h1>
            <Link to="/">HOme</Link>
            Total user Count is {this.state.userCount}
        </div>
    }
}

export default Header;
