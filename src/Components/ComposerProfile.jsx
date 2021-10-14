import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComposerWorks from "./ComposerWorks";

const ComposerProfile = () => {
  const location = useLocation();
  const {composer} = location.state;

  const [composerWorks, setComposerWorks] = useState([]);
  const [workSelection, setWorkSelection] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const composerInfo = await (await fetch(`http://localhost:5000/composers/${composer._id}`)
      ).json();
      console.log(composerInfo.works);
      setComposerWorks(composerInfo.works);
      setWorkSelection(composerInfo.works);
    }
    fetchData();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      const tempArr = composerWorks.filter((work) => {
        return work.title.toLowerCase().includes(query.toLowerCase());
      });
      setWorkSelection(tempArr);
      setQuery("");
    }
  };

  const resetHandler = () => {
    setQuery("");
    setWorkSelection(composerWorks);
  };

  return (
    <div className="composerProfileContainer">
        <div>
          <h2>{composer.complete_name}</h2>
          <div>
            <img src={composer.portrait} alt={`${composer.complete_Name} portrait`} />
          </div>

          <p>{composer.birth.substring(0, 4)} - {composer.death === null ? "present" : composer.death.substring(0, 4)}</p>
          <p>Time Period: {composer.epoch}</p>

          <form onSubmit={submitHandler}>
            <div className="workSearch">
              <label htmlFor="searchWorks">Search Works:</label>
              <input onChange={(e) => setQuery(e.target.value)} type="text" name="searchWorks" id="searchWorks" value={query} placeholder="search work"/>
              <div className="searchButtons">
                <input type="submit" value="Search" />
                <input onClick={resetHandler} type="reset" value="Clear" />
              </div>
            </div>
          </form>

          <ComposerWorks composer={composer} composerWorks={workSelection}/>
        </div>
    </div>
  );
};

export default ComposerProfile;
