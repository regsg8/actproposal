import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withUser } from './context/UserProvider'
import Header from './components/Header'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/Footer'
import TestTakingPersonality from './components/dashboard/TestTakingPersonality'
import Auth from './components/login/Auth'




class App extends Component {

  componentWillUnmount(){
    this.props.logout()
  }

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
          <Route exact path='/' component={() => <Auth />} />
          <Route path='/dashboard' component={() => <Dashboard />} />
          <Route path='/testtakingpersonality' component={() => <TestTakingPersonality />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withUser(App)
