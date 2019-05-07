import React from 'react'
import Menu from './Menu'

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
            marginTop: '5px',
            height: '55px',
            float: 'left'
        },
        title: {
            margin: '0px',
            marginTop: '12px',
            color: 'rgb(36, 51, 107)'
        },
        banner: {
            width: '100%',
            
            top: '0px',
            left: '0px',
            zIndex: '-1'
        },
        div: {
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplatecolumns: 'auto auto',
            width: '100%',
            position: 'relative'
        },
        span: {
            color: 'rgb(210, 176, 111)',
            textShadow: 'rgb(36, 51, 107) 1px 1px'
        }
    }
    return (
        <div style={styles.div}>
            <div style={styles.nameDiv}>
                <img style={styles.logo} src={`${require('../resources/pictures/Final/Primary/PNG/SP-Primary_BW-TM-LT.png')}`} alt='ACT Prep Logo'></img>
                <h1 style={styles.title}>Strategic <span style={styles.span}>ACT</span> Prep</h1>
                <Menu />
            </div>
            <img src={`${require('../resources/pictures/headers/headerlogo.png')}`} alt='ACT Prep Banner' style={styles.banner}></img>
            
        </div>
    )
}

export default Header


