import React from 'react'
import Title from './Title'
import { StyledLoginButton, StyledRegisterButton, StyledRegisterForm }  from '../../elements/index'

const Register = props => {
    const styles = {
        div: {
            display: 'grid',
            justifyContent: 'center'
        }
    }
    
    const { handleChange, handleSubmit, setToggle, formInputs: { username, password, confirmPassword }} = props

    return (
        <div style={styles.div}>
            <StyledRegisterForm onSubmit={handleSubmit}>
                <Title />
                <div>Username</div>
                <div>
                    <input name='username' value={username} onChange={handleChange}></input>
                </div>
                <div>Password</div>
                <div>
                    <input name='password' type='password' value={password} onChange={handleChange}></input>
                </div>
                <div>Confirm</div>
                <div>
                    <input name='confirmPassword' type='password' value={confirmPassword} onChange={handleChange}></input>
                </div>
                <StyledRegisterButton onClick={() => setToggle(p => !p)}>Back</StyledRegisterButton>
                <StyledLoginButton type='submit'>REGISTER</StyledLoginButton>
            </StyledRegisterForm>
            
        </div>
            
        
    )
}

export default Register

// const initInputs = { username: "", password: "", confirm: "" }
//     const loginInputs = inputs => props.login(inputs)
//     const signupInputs = inputs => props.signup(inputs)

//     const {
//         formInputs: loginFormInputs,
//         handleChange: loginHandleChange,
//         handleSubmit: loginHandleSubmit
//     } = useForm(initInputs, loginInputs)

//     const {
//         formInputs: signupFormInputs,
//         handleChange: signupHandleChange,
//         handleSubmit: signupHandleSubmit
//     } = useForm(initInputs, signupInputs)

//     return (
//         <div style={styles.div}>
//         {toggle ? 
//             <Register 
//                 setToggle={setToggle} 
//                 formInputs={signupFormInputs}
//                 handleChange={signupHandleChange}
//                 handleSubmit={signupHandleSubmit}
//             /> 
//             : 
//             <Login  
//                 setToggle={setToggle} 
//                 formInputs={loginFormInputs}
//                 handleChange={loginHandleChange}
//                 handleSubmit={loginHandleSubmit}
//             />
//         }