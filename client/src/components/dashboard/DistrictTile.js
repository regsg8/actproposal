import React from 'react'
import ScoreChart from './ScoreChart'
import { StyledDistrictTile, StyledPageTitle, StyledChartTitle } from '../../elements/index'

const DistrictTile = props => {
    
    return (
        <StyledDistrictTile>
            {props.district[0] && 
                <div>
                    <StyledPageTitle>
                        {`${props.district[0].name} `}
                    </StyledPageTitle>
                    <StyledChartTitle>
                    ACT Score Comparison
                    </StyledChartTitle>
                </div>}
            <ScoreChart data={props.data}/>
        </StyledDistrictTile>
    )
}

export default DistrictTile 
