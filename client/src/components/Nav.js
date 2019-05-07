import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const styles = {
        div: {
            display: 'flex',
            justifyContent: 'center'
        }
    }
    return (
        <div style={styles.div}>
            <Link to='./'>Login</Link> &nbsp;
            <Link to='./dashboard'>Dashboard</Link> &nbsp;
            <Link to='./testtakingpersonality'>Personality</Link>
        </div>
    )
}

export default Nav 
