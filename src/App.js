import './App.css';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ComposerList from './Components/ComposerList';
import ComposerProfile from './Components/ComposerProfile';
import WorkView from './Components/WorkView';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState({composers: []});
  const [spotifyID, setSpotifyID] = useState('64XAQNts7RaywHdO3FYabw');

  useEffect(() => {
    return fetch('https://api.openopus.org/work/dump.json')
    .then(data => data.json())
    .then(items => {
        setData(items);
    })
  }, []);

  return (
    <DataContext.Provider value={{ data, spotifyID, setSpotifyID }}>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path ='/composers' component={ ComposerList } />
            <Route path='/profile/:id' exact>
                <ComposerProfile/>
            </Route>
            <Route path='/works/:id' exact>
                <WorkView/>
            </Route>
        </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
