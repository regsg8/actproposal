import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import TestTakingPersonality from './components/TestTakingPersonality'
import Auth from './components/login/Auth'
import Menu from './components/Menu'



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
