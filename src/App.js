import { Route } from 'react-router';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      {/* <About /> */}
      {/* <Contacts /> */}
    </div>
  );
}

export default App;
