import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ComposerWorks = ({ composer, composerWorks }) => {

  // useEffect(()=>{

  // },[composerWorks])

  const workList = composerWorks.map((work, index)=>{
    return(
      <li key={index}>
        <Link to={{pathname:`/composers/${composer.complete_name}/${work.title}`, state: {composer:composer, work:work}}} className="composerListItem">
          {work.title}
        </Link>
      </li>
    )
  });

  return (
    <div>
      <h3>Works</h3>
      <ul>
        {workList}
      </ul>
    </div>
  );
};

export default ComposerWorks;
