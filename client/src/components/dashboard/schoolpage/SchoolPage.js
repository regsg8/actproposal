import React from 'react'
import { StyledPageTitle } from '../../../elements/index'
import CoreOrMore from './CoreOrMore'
import Benchmarks from './Benchmarks'

const SchoolPage = props => {
    return (
        <div>
            <StyledPageTitle>{props.name}</StyledPageTitle>
            <CoreOrMore {...props}/>
            <Benchmarks {...props}/>
        </div>
    )
}

export default SchoolPage 
