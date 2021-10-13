import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className="welcomeBanner">
      <h1>Welcome to aChord!</h1>
            
      <p>a study tool for musicians connecting metadata from the OpenOpus API and Spotify playback and linking to scores from the Petrucci Music Library</p>

      <p>This page contains a list of all composers available through OpenOpus. Click on a name to be taken to that composer's profile. Browse through the list, or use the search function to find the composer you are looking for.</p>
    </div>
  )
}

export default WelcomeBanner
