import React from 'react'

const Footer = () => {
    const styles = {
        div: {
            display: 'flex',
            justifyContent: 'space-around',
            height: '25px',
            width: '100%',
            backgroundColor: 'rgb(36, 51, 107)',
            marginTop: '10px',
            color: 'rgb(243, 244, 246)',
            paddingRight: '35%',
            paddingLeft: '35%',
            paddingTop: '5px',
            paddingBottom: '5px',
        }
    }
    return (
        <div style={styles.div}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fas fa-print"></i>
            <i className="fas fa-envelope"></i>
        </div>
    )
}

export default Footer
