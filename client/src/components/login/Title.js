import React from 'react'
import { StyledTitle } from '../../elements/index'

const Title = () => {
    const styles = {
        span: {
            color: 'rgb(210, 176, 111)',
            textShadow: 'none'
        }
    }
    return (
        <StyledTitle>
            Strategic <span style={styles.span}>ACT</span> Prep
        </StyledTitle>
    )
}

export default Title
