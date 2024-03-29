import React from 'react'
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import { StyledBenchmarksDiv, SmallDonutChart, StyledSchoolPageTile, StyledChartTitle } from '../../../elements/index'

ReactChartkick.addAdapter(Chart)

const Benchmarks = props => {
    return (
        <StyledSchoolPageTile>
            <h1>Benchmarks</h1>
            ACT Benchmarks are used to indicate chances of a student being successful in respective college classes.  Meeting a Benchmark shows that a student has a reasonable chance to earn a 'B' or better in their Freshman year of college. <br/>
            <StyledBenchmarksDiv>
                <SmallDonutChart>
                    English
                    <PieChart donut={true} data={props.englishBenchmark} suffix='%' />
                </SmallDonutChart>
                <SmallDonutChart>
                    Math
                    <PieChart donut={true} data={props.mathBenchmark} suffix='%' />
                </SmallDonutChart>
                <SmallDonutChart>
                    Reading
                    <PieChart donut={true} data={props.readingBenchmark} suffix='%' />
                </SmallDonutChart>
                <SmallDonutChart>
                    Science
                    <PieChart donut={true} data={props.scienceBenchmark} suffix='%' />
                </SmallDonutChart>
                <SmallDonutChart>
                    All Benchmarks
                    <PieChart donut={true} data={props.allBenchmark} suffix='%' />
                </SmallDonutChart>
            </StyledBenchmarksDiv>
        </StyledSchoolPageTile>
    )
}

export default Benchmarks 