import React, { Component } from 'react';
import './App.css';
import SetRouter from './router/index.js' 
import { BrowserRouter as Router,Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App clearfix">
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/order">订单</Link></li>
                <li><Link to="/user">用户</Link></li>
              </ul>

              <SetRouter/>
        </div>
       </Router>
    );
  }
}

export default App;
