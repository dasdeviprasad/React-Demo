import React from 'react';

export default class extends React.Component {
    render() {
        return <div>
                <p>
                    Name<input type="text" ref="login" />
                </p>
                <p>
                    Age<input type="number" ref="id" />
                </p>
                <button onClick={this.addUser.bind(this)}>
                    Add User
                </button>
            </div>;
    }

    addUser() {
        let newUser = {
            login: this.refs.name.value, 
            id: this.refs.id.value
        }

        this.props.addUser(newUser);
    }
}