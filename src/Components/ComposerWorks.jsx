import React from "react";
import { Link } from "react-router-dom";

const ComposerWorks = ({ composer, composerWorks }) => {

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
      <ul>
        {workList}
      </ul>
    </div>
  );
};

export default ComposerWorks;
