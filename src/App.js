import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ComposerList from './Components/ComposerList';
import ComposerProfile from './Components/ComposerProfile';
import WorkView from './Components/WorkView';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SpotifyPlayer from './Components/SpotifyPlayer';
import UserProfile from './Components/UserProfile';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact>
              <Redirect to="/composers" />
            </Route>
            <Route path='/composers' exact component={ ComposerList } />
            <Route path ='/about' component={ About } />
            <Route path="/userprofile" component={ UserProfile } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/composers/:composerName" exact>
                <ComposerProfile/>
            </Route>
            <Route path='/composers/:composerName/:workName' exact>
                <WorkView/>
            </Route>
        </Switch>
        <SpotifyPlayer/>
        </Router>
  );
}

export default App;
