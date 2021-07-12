import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginScaffolding from './Login.jsx'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: props.location
        }
    }

    render() {
        return (
            <LoginScaffolding redirect={this.state.redirect} setToken={this.props.setToken} appState={this.props.appState} />
        )
    }
}

export default withRouter(Login)