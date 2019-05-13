import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import useForm from '../hooks/useForm'
import { StyledTextTile } from '../../elements/index'
import { withUser } from '../../context/UserProvider'

const Auth = props => {
    const [toggle, setToggle] = useState(false)
    const styles = {
        div: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
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
        <StyledTextTile>
            Early and frequent practice testing allows administrators and teachers the opportunity to identify and address potential weaknesses. <br/> <br/>
            Strategic ACT Prep provides schools with the tools and guidance needed to prepare and evaluate students' ACT readiness. Once a practice test is complete, Strategic ACT Prep delivers custom insights on needed focus areas so schools can target specific topics and questions that will improve scores on test day.
            
        </StyledTextTile>
        <StyledTextTile>
            Nothing can improve admission and scholarship opportunities as quickly and effectively as improving ACT scores.  <br/> <br/>
            Strategic ACT Prep gives students confidence by helping them identify their test-taking personality with tips on what strategies will be most effective for their personality. <br/>  <br/>
            "The class does such a great job of taking the knowledge a student has to the next level with competitive strategies." <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.span}>- Andrew Bennett, Student</span>
        </StyledTextTile>
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
