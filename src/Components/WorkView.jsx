import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const WorkView = () => {
    const params = useParams();
    const location = useLocation();
    const { composerData, work } = location.state;

    console.log(composerData[0].name);
    console.log(params);
    console.log(work);

    return (
        <div>
            <h3>Work View</h3>
            <p>{work.title}</p>
            <p>Genre: {work.genre}</p>
            <p>To search IMSLP for the score, click <a href={`https://www.google.com/search?q=site:imslp.org+${composerData[0].name}+${work.title}`} target='_blank'>here</a></p>
            <Link to={`/profile/${composerData[0].complete_name}`}><button>Back</button></Link>
        </div>
    )
}

export default WorkView
