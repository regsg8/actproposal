import React from 'react'
import Menu from './Menu'
import { StyledHeader } from '../elements/index'

const Header = () => {
    const styles = {
        nameDiv: {
            display: 'flex',
            flexWrap: 'nowrap',
            color: 'rgb(64, 70, 83)',
            marginTop: '10px',
            marginBottom: '20px',
            justifyContent: 'space-between' 
        },
        logo: {
            marginTop: '0px',
            height: '55px',
            float: 'left',
            marginLeft: '10px'
        },
        title: {
            margin: '0px',
            marginTop: '12px',
            color: 'rgb(36, 51, 107)'
        },
        div: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplatecolumns: 'auto auto',
            width: '100vw',
            
        },
        span: {
            color: 'rgb(210, 176, 111)',
            textShadow: 'rgb(36, 51, 107) 1px 1px'
        }
    }
    return (
        <div style={styles.div}>
            <StyledHeader>
                <img style={styles.logo} src={`${require('../resources/actlogo.jpeg')}`} alt='ACT Prep Logo'></img>
                <h1 style={styles.title}>Strategic <span style={styles.span}>ACT</span> Prep</h1>
                <Menu />
            </StyledHeader>
            
            
        </div>
    )
}

export default Header


// src={`${require('../resources/pictures/Final/Primary/PNG/SP-Primary_BW-TM-LT.png')}`}