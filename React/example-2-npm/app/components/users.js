import React, {Component} from 'react';
import {hashHistory} from 'react-router';

export default class extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps); // New one
        console.log(nextState);
        console.log(this.props.users.length); // Previous one
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    onViewVClick(user) {
        this.props.setSelectedUser.bind(null, user);
        hashHistory.push('/user/' + user.login);
    }

    render() {
        let rows = this.props.users.map((user, index) => {
            return <tr key={index}>
                        <td>{user.login}</td>
                        <td>{user.id}</td>
                        <td>
                            <button onClick={this.onViewVClick.bind(this, user)}>
                                View
                            </button>
                        </td>
                   </tr>
        });

        return <div>Users
            <table>
                <thead>
                    <tr>
                        <th>Login</th>
                        <th>Id</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    }
}