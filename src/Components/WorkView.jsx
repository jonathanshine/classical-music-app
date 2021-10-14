import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { DataContext } from "../context/Context";

const WorkView = () => {
  const { setSpotifyID } = useContext(DataContext);
  const location = useLocation();
  const { composer, work } = location.state;
  const history = useHistory();

  const spotifyToken = process.env.REACT_APP_SPOTIFY_API_TOKEN;
  // const clientID = process.env.REACT_APP_CLIENT_ID;
  // const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const playHandler = async () => {
    const searchInput =
      composer.complete_name.split(",").join(" ") +
      " " +
      work.title.split(",").join(" ");

    const spotifyData = await (
      await fetch(`https://api.spotify.com/v1/search?query=${searchInput}&type=track&market=DE&offset=0&limit=1`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + spotifyToken,
          }
        }
      )
    ).json();

    setSpotifyID(spotifyData.tracks.items[0].id);
  };

  return (
    <div className="workViewContainer">
      <h2>{work.title}</h2>
      <button onClick={playHandler}>Play Track</button>
      <p>Genre: {work.genre}</p>
      <p>To search IMSLP for the score, click{" "} <a href={`https://www.google.com/search?q=site:imslp.org+${composer.name}+${work.title}`} target="_blank" rel="noreferrer">here</a></p>
      <button onClick={()=>history.goBack()}>Back</button>
    </div>
  );
};

export default WorkView;
