import React from 'react';
import { useState, useContext } from 'react';
import { DataContext } from '../App';

const ComposerList = () => {
    const { data, setData } = useContext(DataContext);
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
        console.log(tempArr);
        setSearchList({composers: tempArr});
        setQuery('');
        setReset(false);
    };
    console.log(reset);
    return (
        <div>
            <h1>Composer List</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor="composerName">Search by Composer Name:</label>
                <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={query} />
            </div>
            <input type="submit" value="Search" />
            <input onClick={() => setReset(!reset)} type="reset" value="Reset" />
        </form>

            <ul>
                {reset ? data.composers.map(composer => {
                    return <li key={composer.id}>{composer.complete_name}</li>
                }) : searchList.composers.map(composer => {
                    return <li key={composer.id}>{composer.complete_name}</li>
                })}
            </ul>
        </div>
    )
}

export default ComposerList
