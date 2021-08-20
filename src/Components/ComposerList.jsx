import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

const ComposerList = () => {
    const { data } = useContext(DataContext);
    const [query, setQuery] = useState('');
    const [searchList, setSearchList] = useState({composers: []});
    const [reset, setReset] = useState(true);

    const handleChange = (e) => {
        const query = e.target.value;
        setQuery(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempArr = data.composers.filter(composer => {
            return composer.complete_name.toLowerCase().includes(query);
        });
        setSearchList({composers: tempArr});
        setQuery('');
        setReset(false);
    };

    return (
        <div className='composerListContainer'>
            <h1>Composer List</h1>
            
            <p>This page contains a list of all composers available through OpenOpus. Click on a name to be taken to that composer's profile. Browse through the list, or use the search function to find the composer you are looking for</p>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="composerName"><strong>Search by Composer Name: </strong></label>
                    <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={query} />
                </div>
                <div className="buttons">
                    <input type="submit" value="Search" />
                    <input onClick={() => {setReset(!reset); setSearchList(data)}} type="reset" value="Reset" />
                </div>
            </form>
                
            <ul>
                {reset ? data.composers.map((composer, index) => {
                    return <li key={index}><Link to={`/profile/${composer.complete_name}`}>{composer.complete_name}</Link></li>
                }) : searchList.composers.map((composer, index) => {
                    return <li key={index}><Link to={`/profile/${composer.complete_name}`}>{composer.complete_name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default ComposerList
