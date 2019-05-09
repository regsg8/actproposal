import React from 'react'
import Title from './Title'
import { withUser } from '../../context/UserProvider'
import { StyledLoginForm, StyledLoginButton, StyledRegisterButton } from '../../elements/index'

const Login = props => {
    const styles = {
        div: {
            display: 'grid',
            justifyContent: 'center'
        }
    }
    const { handleChange, handleSubmit, setToggle, formInputs: { username, password, confirmPassword }} = props
    
    return (
        <div style={styles.div}>
            <StyledLoginForm onSubmit={handleSubmit}>
                <Title />
                <div>Username</div>
                <div>
                    <input name='username' value={username} onChange={handleChange}></input>
                </div>
                <div>Password</div>
                <div>
                    <input name='password' type='password' value={password} onChange={handleChange}></input>
                </div>
                <StyledRegisterButton onClick={() => props.setToggle(p => !p)}>Register</StyledRegisterButton>
                <StyledLoginButton onClick={() => props.login()} type='submit'>LOG ON</StyledLoginButton>
            </StyledLoginForm>
        </div>
            
        
    )
}

export default withUser(Login)