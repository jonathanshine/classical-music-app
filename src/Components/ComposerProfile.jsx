import React, { useState } from 'react';
import ComposerWorks from './ComposerWorks';

const ComposerProfile = ({composerData, toggleProfile, setToggleProfile}) => {
    const [works, setWorks] = useState([]);
    const [toggleWorks, setToggleWorks] = useState(false);

    const handleClick = async () => {
        const composer = await (await fetch(`https://api.openopus.org/work/list/composer/${composerData[0].id}/genre/all.json`)).json();
        setWorks(composer.works);
        setToggleWorks(!toggleWorks);
    };

    return (
        <div>
            <h2>{composerData[0].complete_name}</h2>
            <div>
                <img src={composerData[0].portrait} alt="" />
            </div>
            <button onClick={() => setToggleProfile(!toggleProfile)}>Back</button>
            <p>Birth: {composerData[0].birth}</p>
            <p>Death: {composerData[0].death === null ? 'Not Dead Yet!' : composerData[0].death}</p>
            <p>Time Period: {composerData[0].epoch}</p>
            <button onClick={() => handleClick()}>{toggleWorks ? 'Hide Works' : 'Show Works'}</button>
            {toggleWorks ? <ComposerWorks works={ works } /> : null}
        </div>
    )
}

export default ComposerProfile
