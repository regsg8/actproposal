import React from 'react'
import ReactChartkick, { PieChart, LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import { StyledSchoolPageTile, StyledChartTitle } from '../../../elements/index'

ReactChartkick.addAdapter(Chart)

const CoreOrMore = props => {
    return (
        <StyledSchoolPageTile>
            <h1>Core or More</h1>
            <StyledSchoolPageTile>
                Level of preparation plays a role in test performance.  This chart shows the difference between students with "Core or More" classes and "Less than Core" classes.  "Core or More" means students who have 4+ years of English AND 3+ years of math, social studies, and natural science. <br/><br/>
                <PieChart data={props.coreMorePercent} suffix='%' />
            </StyledSchoolPageTile>
            <StyledSchoolPageTile>
                The below chart shows compares scores of "Core or More" and "Less than Core" students. <br/><br/>
                <LineChart min={15} max={25} data={[props.moreCore, props.lessCore]} xtitle='Category' ytitle='Score'/>
            </StyledSchoolPageTile>
        </StyledSchoolPageTile>
    )
}

export default CoreOrMore 
