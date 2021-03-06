import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Help from '../Help/Help'
import './app.css'
const Error = () => <div>404</div>
class App extends React.Component {
  render () {
    let a = 10
    const style ={
      fontWeight:'bold',
      color:'red'
    }
    return (
      <Router>
        <div>
          <Help />
          <ul>
            <li><NavLink to='/' exact activeStyle={style} >Home</NavLink></li>
            <li><NavLink to={{
                pathname: '/about',
                state: { a: a }
              }} activeStyle={style}>About</NavLink></li>
            <li><NavLink to='/newwork' activeStyle={style}>Work</NavLink></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about'  component={About} />
            <Route path='/newwork'  component={Work} />
            <Route path='/404'  component={Error} />
            <Redirect  from='/work' to='/newwork' />
            <Redirect  from='/*' to='/404' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
