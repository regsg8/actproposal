import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Provider } from '../index'

 class DataProvider extends Component {
     constructor() {
         super()
         this.state = {
            menu: 'hide',
            isLoggedIn: false
         }
         
     }

    toggleMenu = () => {
        this.setState(prevState => ({
            menu: prevState.menu === 'hide' ? 'show' : 'hide'
        }))
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
            menu: 'hide'
        })
        this.props.history.push('/dashboard')
    }
    render() {
        const props = {
            ...this.state,
            onLogin: this.onLogin,
            toggleMenu: this.toggleMenu
        }
        return (
            <Provider value={props}>
                {this.props.children}
            </Provider>
        )
    }
}

export default withRouter(DataProvider)
