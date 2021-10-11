import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ComposerList from './Components/ComposerList';
import ComposerProfile from './Components/ComposerProfile';
import WorkView from './Components/WorkView';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [spotifyID, setSpotifyID] = useState('64XAQNts7RaywHdO3FYabw');

  useEffect(() => {
    return fetch('https://api.openopus.org/work/dump.json')
    .then(data => data.json())
    .then(items => {  
      setData(items.composers);
    })
  }, []);
  

  return (
    <DataContext.Provider value={{ data, spotifyID, setSpotifyID }}>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={ ComposerList } />
            <Route path ='/about' component={ About } />
            <Route path='/profile/:id' exact>
                <ComposerProfile/>
            </Route>
            <Route path='/works/:id' exact>
                <WorkView/>
            </Route>
        </Switch>
        </Router>
        <footer>© 2021 - Jonathan Shine</footer>
    </DataContext.Provider>
  );
}

export default App;
