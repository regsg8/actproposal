import React from 'react'
import ScoreChart from './ScoreChart'
import { StyledDistrictTile, StyledDistrictTitle, StyledChartTitle } from '../../elements/index'

const DistrictTile = props => {
    
    return (
        <StyledDistrictTile>
            {props.district[0] && 
                <div>
                    <StyledDistrictTitle>
                        {`${props.district[0].name} `}
                    </StyledDistrictTitle>
                    <StyledChartTitle>
                    ACT Score Comparison
                    </StyledChartTitle>
                </div>}
            <ScoreChart data={props.data}/>
        </StyledDistrictTile>
    )
}

export default DistrictTile 
