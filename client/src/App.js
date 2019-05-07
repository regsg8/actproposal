import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import TestTakingPersonality from './components/TestTakingPersonality'
import Login from './components/Login'
import Menu from './components/Menu'



class App extends Component {
  
  render() {
    const styles = {
      appDiv: {
        display: 'grid',
        justifyContent: 'center',
      }
    }
    return (
      <div style={styles.appDiv}>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Login />} />
          <Route path='/dashboard' component={() => <Dashboard />} />
          <Route path='/testtakingpersonality' component={() => <TestTakingPersonality />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
