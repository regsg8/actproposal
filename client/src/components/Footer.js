import React from 'react'
import { StyledFooterRibbon } from '../elements/index'

const Footer = () => {
    const styles = {
        i: {
            color: 'white'
        }
    }

    return (
        <StyledFooterRibbon>
            <a style={styles.i} href='https://www.facebook.com/strategicactprep/' target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-lg" ></i>
            </a>
            <a style={styles.i} href={`https://twitter.com/intent/tweet?text=Home&url=http%3A%2F%2Fwww.strategicactprep.com%2F&related=`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a style={styles.i} href='mailto:strategicactprep@gmail.com' target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope fa-lg"></i>
            </a>
        </StyledFooterRibbon>
    )
}

export default Footer
