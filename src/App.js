import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ComposerList from './Components/ComposerList';
import ComposerProfile from './Components/ComposerProfile';
import WorkView from './Components/WorkView';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SpotifyPlayer from './Components/SpotifyPlayer';


export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [spotifyID, setSpotifyID] = useState('64XAQNts7RaywHdO3FYabw');
  const [user, setUser] = useState();

  useEffect(() => {
    return fetch('http://localhost:5000/composers')
    .then(data => data.json())
    .then(items => {  
      setData(items);
    })
  }, []);
  

  return (
    <DataContext.Provider value={{ data, user, setUser, spotifyID, setSpotifyID }}>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact>
              <Redirect to="/composers" />
            </Route>
            <Route path='/composers' exact component={ ComposerList } />
            <Route path ='/about' component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/composers/:composerName" exact>
                <ComposerProfile/>
            </Route>
            <Route path='/composers/:composerName/:workName' exact>
                <WorkView/>
            </Route>
        </Switch>
        </Router>
        <SpotifyPlayer/>
        {/* <footer>© 2021 - Jonathan Shine</footer> */}
    </DataContext.Provider>
  );
}

export default App;
