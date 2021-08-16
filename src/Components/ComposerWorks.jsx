import React from 'react';

const ComposerWorks = ({ works }) => {

    console.log(works);

    return (
        <div>
            <h3>Popular Works</h3>
            <ul>
                {works.length > 0 ? works.map(work => {
                        if (work.popular === '1' || work.recommended === '1') {
                            return <li key={work.id}>
                                {work.title}
                            </li>
                        }
                    }) : null}
            </ul>
        </div>
    )
}

export default ComposerWorks
