import React from 'react';
import { useState, useContext } from 'react';
import { DataContext } from '../App';

const ComposerList = () => {
    const { data } = useContext(DataContext);

    console.log(data);
 
    return (
        <div>
            <h1>Composer List</h1>

        <form>
            <div>
                <label htmlFor="composerName">Search by Composer Name:</label>
                <input onChange={(e) => handleChange(e)} type="search" name="composerName" id="composerName" />
            </div>
            <input type="submit" value="Search" />
        </form>

            <ul>
                {data.composers.map(composer => {
                    return <li key={composer.index}>{composer.complete_name}</li>
                })}
            </ul>
        </div>
    )
}

export default ComposerList
