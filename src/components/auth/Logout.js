import React, { Component } from 'react';

class Logout extends Component {
    componentWillMount() {
        localStorage.removeItem('user');
        this.props.history.replace('/login');
    }

    render() {
        return(
            <p>
                Logging you out ...
            </p>
        )
    }
}

export default Logout;