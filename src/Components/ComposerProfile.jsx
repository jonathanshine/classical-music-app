import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComposerWorks from './ComposerWorks';

const ComposerProfile = () => {
    let params  = useParams();
    const [composerData, setComposerData] = useState({composer: []})
    const [works, setWorks] = useState([]);
    const [toggleWorks, setToggleWorks] = useState(false);

    useEffect(async () => {
        const composerInfo = await (await fetch(`https://api.openopus.org/composer/list/search/${params.id}.json`)).json();
        setComposerData(composerInfo.composers);
    }, [])

    const handleClick = async () => {
        const composer = await (await fetch(`https://api.openopus.org/work/list/composer/${composerData[0].id}/genre/all.json`)).json();
        setWorks(composer.works);
        setToggleWorks(!toggleWorks);
    };

    return (
        <>
            {composerData[0] && (<div>
                <h2>{composerData[0].complete_name}</h2>
                <div>
                    <img src={composerData[0].portrait} alt="" />
                </div>
                <Link to='/composers'><button>Back</button></Link>
                <p>{composerData[0].birth.substring(0, 4)} - {composerData[0].death === null ? '' : composerData[0].death.substring(0, 4)}</p>
                <p>Time Period: {composerData[0].epoch}</p>
                <button onClick={() => handleClick()}>{toggleWorks ? 'Hide Works' : 'Show Works'}</button>
                {toggleWorks ? <ComposerWorks works={ works } /> : null}
            </div>)}
        </>
    )
}

export default ComposerProfile
