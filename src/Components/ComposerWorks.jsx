import React from 'react';
import { Link } from 'react-router-dom';

const ComposerWorks = ({ works, composerData }) => {

    return (
        <div>
            <h3>Popular Works</h3>
            <ul>
                {works.length > 0 ? works.map(work => {
                        if (work.popular === '1' || work.recommended === '1') {
                            return <li key={work.id}>
                                <Link to={{pathname: `/works/${work.id}`, state: {composerData: composerData, work: work}}}>{work.title}</Link>
                            </li>
                        }
                    }) : null}
            </ul>
        </div>
    )
}

export default ComposerWorks
