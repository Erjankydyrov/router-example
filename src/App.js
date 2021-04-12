import { Route } from 'react-router';
import './App.css';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      This is App.js
      <Route path="/about" component={About} />
      <About />
    </div>
  );
}

export default App;
