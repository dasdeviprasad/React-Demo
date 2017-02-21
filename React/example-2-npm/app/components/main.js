import React, {Component} from 'react';
import Header from './header';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                <Header />
                {this.props.children}
            </div>
    }
}

/*
Main.propTypes = {
    page: React.PropTypes.object
};*/
export default Main;