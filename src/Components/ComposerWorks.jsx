import React from "react";
import { Link } from "react-router-dom";

const ComposerWorks = ({ composer, composerWorks }) => {

  const workList = composerWorks.map(work=>{
    console.log(work);
    return(
      <li>{work}</li>
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
