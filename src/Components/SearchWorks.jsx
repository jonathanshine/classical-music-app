import React from 'react'

const SearchWorks = ({ works }) => {

    return (
        <div>
            <h3>Search Result</h3>
            
            <ul>
                {works.length > 0 ? works.map(work => {
                    return <li key={work.id}>
                        {work.title}
                    </li>
                    }) : null}
            </ul>
        </div>
    )
}

export default SearchWorks
