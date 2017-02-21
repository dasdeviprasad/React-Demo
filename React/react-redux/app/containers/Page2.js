import React, {Component} from 'react';


class Page2 extends Component{
    componentDidMount() {
        let userName = this.props.params.userName;
        /*this.setState({
            user: UserStore.getUser(userName)
        });*/
    }
    render(){
        return <div>
            Hi
        </div>
    }
}

export default Page2;