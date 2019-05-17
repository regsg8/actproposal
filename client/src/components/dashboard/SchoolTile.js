import React from 'react'
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'
import { StyledBarChart, StyledChartTitle } from '../../elements/index'

ReactChartkick.addAdapter(Chart)

const SchoolTile = props => {
    return (
        <StyledBarChart>
            <StyledChartTitle>{props.name} 2018 ACT</StyledChartTitle>
            <ColumnChart min={18} max={20.5} data={props.recentData} />
        </StyledBarChart>
    )
}

export default SchoolTile