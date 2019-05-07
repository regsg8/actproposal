import React from 'react'
import Profile from './Profile'
import Nav from './Nav'
import ScoreChart from './ScoreChart'

const Dashboard = () => {
    return (
        <div>
            <Nav />
            <Profile />
            <ScoreChart />
            <h3>Features</h3>
            <ul>
                <li>Users need to be able to download documents (district admins can download all docs, school admins can download school docs, etc)</li>
                <li>Maybe a meet the founders page</li>
                <li>See scores for district, school, year, class, user</li>
                <li>Certain admins could have access to focus plans</li>
                <li>Potential feature spotlight (tiles that auto cycle)</li>
                <li>Admins see charts/graphs of test score history for each object they are admin of</li>
                <li>About the ACT page or ACT FAQ page</li>
            </ul>
            <h3>CSS</h3>
            <ul>
                <li>On hover for footer icons</li>
                <li>Nav bar transitions on screen, nav button rotates</li>
                <li>Create styled-components for buttons, etc (make login and signup buttons fancier)</li>
                <li>Make header ribbon a div (currently an img) and request icon from Chris</li>
            </ul>
        </div>
    )
}

export default Dashboard