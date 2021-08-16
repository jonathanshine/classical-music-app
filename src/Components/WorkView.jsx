import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const WorkView = () => {
    const params = useParams();
    const location = useLocation();
    const { composerData } = location.state;

    console.log(composerData[0].complete_name);
    console.log(params);

    return (
        <div>
            <h3>Work View</h3>

            <Link to={`/profile/${composerData[0].complete_name}`}><button>Back</button></Link>
        </div>
    )
}

export default WorkView
