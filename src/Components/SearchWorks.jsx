import React from 'react';
import { Link } from 'react-router-dom';

const SearchWorks = ({ works, composerData }) => {

    return (
        <div>
            <h3>Search Result</h3>
            
            <ul>
                {works.length > 0 ? works.map(work => {
                    return <li key={work.id}>
                        <Link to={{pathname: `/works/${work.id}`, state: {composerData: composerData, work: work}}}>{work.title}</Link>
                    </li>
                    }) : null}
            </ul>
        </div>
    )
}

export default SearchWorks
