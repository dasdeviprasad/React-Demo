import React, {Component} from 'react';
import UserStore from '../stores/Userstore';

class Page2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        let userName = this.props.params.userName;
        this.setState({
            user: UserStore.getUser(userName)
        });
    }
    render(){
        return <div>
            <img src={this.state.user.avatar_url} />
        </div>
    }
}

export default Page2;