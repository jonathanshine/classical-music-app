import React from 'react';

const ComposerWorks = ({ works }) => {
    return (
        <ul>
            {works.length > 0 ? works.map((work, index)=> {
                    if (index < 10) {
                        return <li key={work.id}>
                            {work.title}
                        </li>
                    }
                }) : null}
        </ul>
    )
}

export default ComposerWorks
