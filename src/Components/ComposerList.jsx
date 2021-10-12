import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

const ComposerList = () => {
    const { data } = useContext(DataContext);
    const [query, setQuery] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [reset, setReset] = useState(true);

    const handleChange = (e) => {
        const query = e.target.value;
        setQuery(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempArr = data.filter(composer => {
            return composer.complete_name.toLowerCase().includes(query);
        });
        setSearchList(tempArr);
        setQuery('');
        setReset(false);
    };

    return (
        <div className='composerListContainer'>
            <h1>Welcome to aChord!</h1>
            
            <p>a study tool for musicians connecting metadata from the OpenOpus API and Spotify playback and linking to scores from the Petrucci Music Library</p>

            <p>This page contains a list of all composers available through OpenOpus. Click on a name to be taken to that composer's profile. Browse through the list, or use the search function to find the composer you are looking for.</p>
                
            <ul>
                {reset ? data.map((composer, index) => {
                    return <li key={index}><Link to={`/profile/${composer.complete_name.replace(/-/g, " ")}`}>{composer.complete_name}</Link></li>
                }) : searchList.map((composer, index) => {
                    return <li key={index}><Link to={`/profile/${composer.complete_name.replace(/-/g, " ")}`}>{composer.complete_name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default ComposerList
