import { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../helpers/apiCalls';

export const DataContext = createContext();

export const ContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [spotifyID, setSpotifyID] = useState('64XAQNts7RaywHdO3FYabw');
  const [user, setUser] = useState({});
  const [authIsDone, setAuthIsDone] = useState(false)  

  useEffect(() => {
    const authMe = async () => {
      try {
        const res = await authenticateUser();

        if (!res.error) {
          setUser(res);
          setAuthIsDone(true);
          return;
        }

        setUser(null);
        setAuthIsDone(true);
      } catch (error) {
        console.log("Authentication failed -", error);;
      }
    };

    authMe();
  }, []);

  return (
    <DataContext.Provider
      value={{ data, setData, spotifyID, setSpotifyID, user, setUser, authIsDone, setAuthIsDone }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
