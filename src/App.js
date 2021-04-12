import { Route } from 'react-router';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </div>
  );
}

export default App;
