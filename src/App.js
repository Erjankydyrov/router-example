import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Analytic from './components/Analytic/Analytic';
import Contacts from './components/Contacts/Contacts';
import Economy from './components/Economy/Economy';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import WorldNews from './components/WorldNews/WorldNews';
import WorldVolut from './components/WorldVolut/WorldVolut';
import logo from './images/newspaper.svg'

function App() {

  const activeLinkStyle = {
    fontSize: "18px"
  }

  return (
    <div className="App">
      <ul className="ulNav">
        <li><img src = {logo} alt = ""/></li>
        <li><NavLink exact activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/">Home</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/About">About</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/posts">Posts</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/economy">Economy</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/worldValut">World currency</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/analytic">Analytic</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/worldNews">World News</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/contacts">Contacts</NavLink></li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/economy" component={Economy} />
        <Route path="/worldValut" component={WorldVolut} />
        <Route path="/analytic" component={Analytic} />
        <Route path="/worldNews" component={WorldNews} />
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
