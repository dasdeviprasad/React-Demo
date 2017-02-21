import React from 'react';
import Axios from 'axios';

export default class extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        };
    }
    componentDidMount(){
        let userName = this.props.params.userName;
        let promise = Axios.get('https://api.github.com/users/' + userName);
        promise.then((response) => {
            this.setState({
                user: response.data
            })
        })
    }
    render() {
        return <div>Selected user <strong>{this.state.user.name}</strong></div>
    }
}