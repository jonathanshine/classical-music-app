import React from 'react';
import { useState, useContext } from 'react';
import { DataContext } from '../App';
import ComposerProfile from './ComposerProfile';

const ComposerList = () => {
    const { data } = useContext(DataContext);
    const [query, setQuery] = useState('');
    const [searchList, setSearchList] = useState({composers: []});
    const [composerData, setComposerData] = useState({composer: []});
    const [toggleProfile, setToggleProfile] = useState(false);
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

    const handleClick = async (composer) => {
        const data = await (await fetch(`https://api.openopus.org/composer/list/search/${composer.complete_name}.json`)).json();
        console.log(data);
        setComposerData(data.composers);
        setToggleProfile(!toggleProfile);
    };

    return (
        <div>
            {toggleProfile ? <ComposerProfile composerData={composerData} toggleProfile={toggleProfile} setToggleProfile={setToggleProfile}/> : <div>
                <h1>Composer List</h1>
                
                        <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="composerName">Search by Composer Name:</label>
                    <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={query} />
                </div>
                <input type="submit" value="Search" />
                <input onClick={() => {setReset(!reset); setSearchList(data)}} type="reset" value="Reset" />
                        </form>
                <ul>
                    {reset ? data.composers.map((composer, index) => {
                        return <li onClick={() => handleClick(composer)} key={index}>{composer.complete_name}</li>
                    }) : searchList.composers.map((composer, index) => {
                        return <li onClick={() => handleClick(composer)} key={index}>{composer.complete_name}</li>
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default ComposerList
