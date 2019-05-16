import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNav } from '../../elements/index'
import { withUser } from '../../context/UserProvider'

const Nav = props => {
    
    return (
        <StyledNav>
            
            <Link to='./dashboard'>Dashboard</Link>
            <Link to='./testtakingpersonality'>Personality</Link>
            <Link to='./' onClick={props.logout}>Logout</Link>
        </StyledNav>
    )
}

export default withUser(Nav) 
