import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNav, StyledNavButton } from '../../elements/index'
import { withUser } from '../../context/UserProvider'

const Nav = props => {
    const styles = {
        logout: {
            marginTop: 'auto',
            marginBottom: '10px'
        },
        firstButton: {
            marginTop: '10px'
        }
    }
    const mappedLinks = props.schools.map(item => {
        return (
            <Link to={`/dashboard/${item._id}`} key={item._id}>
                <StyledNavButton>
                    {item.name}
                </StyledNavButton>
            </Link>)
    })
    return (
        <StyledNav>
            
            <Link to='/dashboard' style={styles.firstButton}>
                <StyledNavButton>Dashboard</StyledNavButton>
            </Link>
                {mappedLinks}
            <Link to='/dashboard/personality'>
                <StyledNavButton>Test Personalities</StyledNavButton>
            </Link>
            <Link to='/' onClick={props.logout} style={styles.logout}>
                <StyledNavButton>Logout</StyledNavButton>
            </Link>
        </StyledNav>
    )
}

export default withUser(Nav) 
