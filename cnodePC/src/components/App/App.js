import React from 'react'
import './app.css'
import
{
  BrowserRouter as Router,
  Route
}
from 'react-router-dom'
import Home from '../Home/Home'
import ShowTopic from '../ShowTopic/ShowTopic'
import UserInfo from '../UserInfo/UserInfo'
class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/topic/:id'  component={ShowTopic}/>
          <Route path='/user/:loginname' component={UserInfo} />
        </div>
      </Router>
    )
  }
}

export default App
