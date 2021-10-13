import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../App';

const Navbar = () => {
    const { spotifyID } = useContext(DataContext);

    return (
        <header>
            <nav>
                <p>aChord</p>
                
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/signup' activeClassName='active'>Signup</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/login' activeClassName='active'>Login</NavLink>
                    </li>
                </ul>
            </nav>
            
            <iframe src={`https://open.spotify.com/embed/track/${spotifyID}`} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify Player"></iframe>
        </header>
    )
}

export default Navbar
