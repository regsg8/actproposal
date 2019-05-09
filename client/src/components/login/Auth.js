import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import useForm from '../hooks/useForm'
import { withUser } from '../../context/UserProvider'

const Auth = props => {
    const [toggle, setToggle] = useState(false)
    const styles = {
        div: {
            display: 'grid',
            justifyContent: 'center'
        },
        span: {
            color: 'rgb(210, 176, 111)',
            textShadow: 'none'
        },
        videoDiv: {
            display: 'grid',
            justifyContent: 'center'
        }
    }
    const initInputs = { username: "", password: "", confirm: "" }
    const loginInputs = inputs => props.login(inputs)
    const signupInputs = inputs => props.signup(inputs)

    const {
        formInputs: loginFormInputs,
        handleChange: loginHandleChange,
        handleSubmit: loginHandleSubmit
    } = useForm(initInputs, loginInputs)

    const {
        formInputs: signupFormInputs,
        handleChange: signupHandleChange,
        handleSubmit: signupHandleSubmit
    } = useForm(initInputs, signupInputs)

    return (
        <div style={styles.div}>
        {toggle ? 
            <Register 
                setToggle={setToggle} 
                formInputs={signupFormInputs}
                handleChange={signupHandleChange}
                handleSubmit={signupHandleSubmit}
            /> 
            : 
            <Login  
                setToggle={setToggle} 
                formInputs={loginFormInputs}
                handleChange={loginHandleChange}
                handleSubmit={loginHandleSubmit}
            />
        }
            <div style={styles.videoDiv}>
                <video width='460' controls>
                    <source src={require('../../resources/shelbyactstory.mp4')}></source>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
            
        
    )
}

export default withUser(Auth)
