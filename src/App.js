import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import About from './components/About'
import User from './components/User'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
          <Navbar />
          <Alert />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/users/:login" component={User} />
          <Route component={PageNotFound} />
          </Switch>
        </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;



// when u r using render() for 
//with render you are not passing the default props passed by the router into component, like match, history etc.
// getUserRepos={getUserRepos} so {...props} is used to send all the default params