import React from 'react'
import { Consumer } from '../index'

const Login = props => {
    const styles = {
        div: {
            display: 'grid',
            justifyContent: 'center'
        },
        loginDiv: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'center',
            border: 'solid 4px rgb(210, 176, 111)',
            borderRadius: '10px',
            padding: '20px',
            marginTop: '5px',
            marginBottom: '20px',
            gridGap: '5px',
            backgroundColor: 'rgb(68, 94, 162)',
            color: 'rgb(243, 244, 246)',
            width: '500px',
            height: '240px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '20px',
        },
        register: {
            fontWeight: '600',
            fontStyle: 'italic',
            color: 'rgb(210, 176, 111)',
            textShadow: 'rgb(64, 70, 83)',
            backgroundColor: 'rgb(36, 51, 107)',
            borderRadius: '5px',
            border: 'solid 1px rgb(36, 51, 107)',
            fontSize: '18px',
            
        },
        login: {
            fontWeight: '600',
            color: 'rgb(210, 176, 111)',
            textShadow: 'rgb(64, 70, 83)',
            backgroundColor: 'rgb(36, 51, 107)',
            borderRadius: '5px',
            fontSize: '20px',
            
            border: 'solid 1px rgb(36, 51, 107)',
        },
        title: {
            gridColumnStart: '1',
            gridColumnEnd: '3',
            textAlign: 'center',
            fontWeight: '800',
            marginTop: '10px',
            textShadow: 'rgb(210, 176, 111) 1px 1px',
            verticalAlign: 'center',
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
    return (
        <Consumer>
            
            {value => (
                <div style={styles.div}>
                    <div style={styles.loginDiv}>
                        <div style={styles.title}>
                            Strategic <span style={styles.span}>ACT</span> Prep
                        </div>
                        <div>
                            Username
                        </div>
                        <div>
                            <input name='username'></input>
                        </div>
                        <div>
                            Password
                        </div>
                        <div>
                            <input name='password' type='password'></input>
                        </div>
                        <button style={styles.register}>Register</button>
                        <button style={styles.login} onClick={value.onLogin}>LOG ON</button>
                    </div>
                    <div style={styles.videoDiv}>
                        <video width='460' controls autoPlay autoPlay='autoPlay'>
                            <source src={require('../resources/shelbyactstory.mp4')}></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </Consumer>
    )
}

export default Login
