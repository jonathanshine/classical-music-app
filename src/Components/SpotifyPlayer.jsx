import React, {useContext} from 'react';
import { DataContext } from '../App';


const SpotifyPlayer = () => {
  const { spotifyID } = useContext(DataContext);

  return (
    <iframe className="spotifyPlayer" src={`https://open.spotify.com/embed/track/${spotifyID}`} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify Player"></iframe>
  )
}

export default SpotifyPlayer;
