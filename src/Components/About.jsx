import React from 'react';

const About = () => {
    return (
        <div className='aboutContainer'>
            <h2>About aChord</h2>
            
            <p><strong>Project Idea:</strong> As a classical musician, I always found it frustrating needing multiple applications and browser windows open when studying music, not to mention having to search many different sources for scores and recordings. So I decided to design a tool where the user has access to a list of classical composers and their works through the OpenOpus API, an embedded Spotify player, and the ability to search for the score on IMSLP.</p>
            
            <p><i>*** aChord is far from perfect! It's an ongoing project I started as a student at Digital Career Institute and plan to improve as my knowledge and skill in this area grows.</i></p>
            
            <p>Accordingly, here are a few notes about the site:</p>
            
            <ul>
                <li>
                    <strong>Composers Page:</strong> This page allows the user to access all 220 composers and their works available through OpenOpus. Therefore it is limited to the information that they have in their API. You may not find the composer or work you are looking for, but they are working to improve their service regularly.
                </li>
                <li>
                    <strong>Listening to works on the Spotify Player:</strong> When you click on the name of a piece, the Spotify player should update with the top track it finds according to the name of the piece and the composer. For classical music this is far from perfect, as it might find the correct piece, but the incorrect movement, or an arrangement of the piece for a different instrument. This is something I will certainly be improving in the future!
                </li>
                <li>
                    <strong>IMSLP search:</strong> While IMSLP (Petrucci Music Library) is one of the most comprehensive online libraries for music scores, it is limited to works that are no longer in copyright. This means that scores for many contemporary composers are not available.
                    <p><strong><i>Note, copyright laws change from country to country - please heed the warnings on IMSLP!</i></strong></p>
                </li>
            </ul>
            
        </div>
    )
}

export default About
