import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path ='/search' component={Search} />         
          <Route path ='/contact' component={Contact} /> 
      </Switch>
  </Router>
  );
}

export default App;
