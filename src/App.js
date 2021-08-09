import './App.css';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Contact from './Components/Contact';
import ComposerList from './Components/ComposerList';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({composers: []});

  useEffect(() => {
    return fetch('https://api.openopus.org/work/dump.json')
    .then(data => data.json())
    .then(items => {
        setData(items);
    })
}, []);

  console.log(data);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path ='/search' component={ Search } />
            <Route path ='/composers' component={ ComposerList } />
            <Route path ='/contact' component={ Contact } />
        </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
