import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Master from './components/Master'
import Student from './components/Student'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/master" component={Master} />
        <Route exact path="/Student" component={Student} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default App
