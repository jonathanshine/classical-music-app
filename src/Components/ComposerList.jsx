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
        <div>
            <div>
                <h1>Composer List</h1>
                
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="composerName">Search by Composer Name: </label>
                        <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={query} />
                    </div>
                    <input type="submit" value="Search" />
                    <input onClick={() => {setReset(!reset); setSearchList(data)}} type="reset" value="Reset" />
                </form>
                
                <ul>
                    {reset ? data.composers.map((composer, index) => {
                        return <li key={index}><Link to={`/profile/${composer.complete_name}`}>{composer.complete_name}</Link></li>
                    }) : searchList.composers.map((composer, index) => {
                        return <li key={index}><Link to={`/profile/${composer.complete_name}`}>{composer.complete_name}</Link></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ComposerList
