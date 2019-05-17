import React from 'react'
import SchoolTile from './SchoolTile'
import { StyledSchoolBoardTile } from '../../elements/index'

const SchoolBoard = props => {
    const mappedSchools = props.schools.map(item => {
        return <SchoolTile {...item} key={item._id}/>
    })
    return (
        <StyledSchoolBoardTile>
            {mappedSchools}
        </StyledSchoolBoardTile>
    )
}

export default SchoolBoard 
