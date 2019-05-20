import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import DistrictTile from './DistrictTile'
import SchoolBoard from './SchoolBoard'
import SchoolPage from './schoolpage/SchoolPage'
import TestTakingPersonality from './TestTakingPersonality'
import { StyledDashGrid } from '../../elements/index'
import { withUser } from '../../context/UserProvider'
import { Switch, Route } from 'react-router-dom'

//Show district graph that shows school avg act 
//Show individual schools with detailed graphs (i.e. core or more)
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            district: [],
            schools: []
        }
    }
    componentDidMount(){
        // Get district by user and schools by district (happens on back end)
            axios.get(`/api/district/${this.props.user.district}`)
            .then(res => {
                this.setState({ 
                    district: res.data.district,
                    schools: res.data.schools
                 })
            })
            .catch(err => console.log(err))
    }

    
    render(){
        //Take school data and combine it with state data
        const chartData = []
        this.state.schools.map(item => {
            chartData.push(
                {name: item.name,
                data: {
                    ...item.data
                }
            })
        })
        const stateData = { 
            name: "Utah",
            data: {
                2018: 20.4,
                2017: 20.3,
                2016: 20.2,
                2015: 20.2,
                2014: 20.8
            }
        }
        const usData = {
            name: "U.S.",
            data: {
                2014: 21,
                2015: 21,
                2016: 20.8,
                2017: 21,
                2018: 20.8
            }
        }
        chartData.push(stateData)
        chartData.push(usData)

        const districtTileData = {
            district: this.state.district,
            data: chartData
        }
        // Creates routes for each school in the district
        const mappedRoutes = this.state.schools.map(item => {
            return <Route path={`/dashboard/${item._id}`} key={item._id} render={() => <SchoolPage {...item} />}/>
        })
        // <Route exact path='/' component={() => <Auth />} />
        //   <Route path='/dashboard' component={() => <Dashboard />} />
        return (
            <StyledDashGrid>
                <Nav schools={this.state.schools}/>
                <Switch>
                    <Route exact path='/dashboard' render={() => 
                        <div>
                            <DistrictTile {...districtTileData}/>
                            <SchoolBoard schools={this.state.schools}/>
                        </div>} 
                    />
                    {mappedRoutes}
                    <Route path='/dashboard/personality' render={() => <TestTakingPersonality />} />
                </Switch>
            </StyledDashGrid>
        )
    }
}

export default withUser(Dashboard)