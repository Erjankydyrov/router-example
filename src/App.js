import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {

  const activeLinkStyle = {
    fontSize: "18px"
  }

  return (
    <div className="App">
      <ul>
        <li><NavLink exact activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/">Home</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/About">About</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/contacts">Contacts</NavLink></li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
