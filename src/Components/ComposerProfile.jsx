import React from 'react';

const ComposerProfile = ({composerData, toggleProfile, setToggleProfile}) => {

    console.log(composerData);

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
            <p>Works available: </p>
        </div>
    )
}

export default ComposerProfile
