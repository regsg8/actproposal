import React from 'react'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import { StyledChart } from '../../elements/index'

ReactChartkick.addAdapter(Chart)


const ScoreChart = props => {
    

    return (
        <StyledChart>
            <LineChart min={null} data={props.data} xtitle="Year" ytitle="Score" />
        </StyledChart>
    )
}

export default ScoreChart
