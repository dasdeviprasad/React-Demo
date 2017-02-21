import React,{Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
    render(){
        return <div>
            <h1>User List</h1>
            <Link to="/">HOme</Link>
        </div>
    }
}

export default Header;
