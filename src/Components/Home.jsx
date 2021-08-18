import React from 'react';

const Home = () => {
    return (
        <div className='homeContainer'>
            <h1>Welcome to aChord!</h1>
            
            <p>Project Idea: As a classical musician, I always found it frustrating having to have multiple applications and browser windows open when studying music, not to mention having to search many different sources for notes and music. So I decided to design a tool where the user has access to a list of classical composers and their works through the OpenOpus API, an embedded Spotify player, and the ability to search for the score on IMSLP.</p>
            
            <p>aChord is far from perfect! It's an ongoing project I started as a student at Digital Career Institute and plan to improve as my knowledge and skill in this area grows. </p>
            
            <p>Accordingly, here are a few notes about the site:</p>
            
            <ul>
                <li>
                    Composers Page: This page allows the user to access all 220 composers and their works available through OpenOpus. Therefore it is limited to the information that they have in their API. You may not find the composer or work you are looking for, but they are working to improve their service regularly.
                </li>
                <li>
                    Listening to works on the Spotify Player: When you click on a name, the Spotify player should update with the top track it finds according to the name of the piece and the composer. For classical music this is far from perfect, as it might find the correct piece, but the incorrect movement, or an arrangement of the piece for a different instrument. This is something I will certainly be improving in the future!
                </li>
            </ul>
            
        </div>
    )
}

export default Home
