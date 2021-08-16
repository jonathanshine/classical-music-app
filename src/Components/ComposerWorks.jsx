import React from 'react';

const ComposerWorks = ({ works }) => {

    console.log(works);

    return (
        <ul>
            {works.length > 0 ? works.map(work => {
                    if (work.popular === '1' || work.recommended === '1') {
                        return <li key={work.id}>
                            {work.title}
                        </li>
                    }
                }) : null}
        </ul>
    )
}

export default ComposerWorks
