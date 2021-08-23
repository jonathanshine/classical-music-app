import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../App';

const WorkView = () => {
    const { setSpotifyID } = useContext(DataContext);
    const location = useLocation();
    const { composerData, work } = location.state;

    const spotifyToken = process.env.REACT_APP_SPOTIFY_API_TOKEN;
    // const clientID = process.env.REACT_APP_CLIENT_ID;
    // const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    const handleClick = async () => {
        
        const searchInput = composerData[0].complete_name.split(',').join(' ') + ' ' + work.title.split(',').join(' ');
  
        const spotifyData = await (
            await fetch(`https://api.spotify.com/v1/search?query=${searchInput}&type=track&market=DE&offset=0&limit=1`, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + spotifyToken,
              },
            })
          ).json();
          
          setSpotifyID(spotifyData.tracks.items[0].id)
    }

    return (
        <div className='workViewContainer'>
            <h3>Work View</h3>
            <p><strong>{work.title}</strong></p>
            <button  onClick={() => handleClick()}>Play Track</button>
            <p>Genre: {work.genre}</p>
            <p>To search IMSLP for the score, click <a href={`https://www.google.com/search?q=site:imslp.org+${composerData[0].name}+${work.title}`} target='_blank' rel='noreferrer'>here</a></p>
            <Link to={`/profile/${composerData[0].complete_name}`}><button>Back</button></Link>

        </div>
    )
}

export default WorkView
