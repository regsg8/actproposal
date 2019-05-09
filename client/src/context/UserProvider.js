import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const UserContext = React.createContext()
const actAxios = axios.create()

//Add jwt to Authorization header on outgoing requests
actAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token') || '',
            authErr: '',
        }
    }

    handleAuthErr = (err) => {
        this.setState({
            authErr: err.response.data.errMsg
        })
    }

    signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                this.props.history.push('/dashboard')
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err))
    }

    login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } =res.data
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                this.props.history.push('/dashboard')
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err))
    }

    logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({
            user: {},
            token: {}
        })
    }

    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = (C) => (props) => (
    <UserContext.Consumer>
        { (value => <C {...value} {...props} />)}
    </UserContext.Consumer>
)