import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/home.jsx' 
import User from '../pages/user.jsx' 
import Order from '../pages/order.jsx' 
class SetRouter extends Component{
	render(){
		return(
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/user" component={User} />
				<Route path="/order" component={Order} />
			</div>
			)
	}
}

export default SetRouter