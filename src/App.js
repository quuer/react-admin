import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from 'pages/Login'
import Admin from 'pages/Admin'
import './style/reset.css'
import './App.css'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={Admin}></Route>
					<Route path="/login" component={Login}></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
