import React from 'react'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import { StyledChart } from '../../elements/index'

ReactChartkick.addAdapter(Chart)


const ScoreChart = props => {
    

    return (
        <StyledChart>
            <ColumnChart min={null} stacked={true} data={props.data} />
        </StyledChart>
    )
}

export default ScoreChart