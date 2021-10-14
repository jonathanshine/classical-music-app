import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComposerWorks from "./ComposerWorks";

const ComposerProfile = () => {
  const location = useLocation();
  const {composer} = location.state;

  const [composerWorks, setComposerWorks] = useState([]);
  const [workSelection, setWorkSelection] = useState([]);
  const [whichSelection, setWhichSelection] = useState("");

  const [recommendedWorks, setRecommendedWorks] = useState([]);
  const [popularWorks, setPopularWorks] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const composerInfo = await (await fetch(`http://localhost:5000/composers/${composer._id}`)
      ).json();
      console.log(composerInfo.works);
      const recommended = composerInfo.works.filter(work=>work.recommended=="1");
      const popular = composerInfo.works.filter(work=>work.popular=="1");
      setRecommendedWorks(recommended)
      setPopularWorks(popular)
      setComposerWorks(composerInfo.works);
      setWorkSelection(composerInfo.works);
    }
    fetchData();
  },[]);

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

  const workSelectionHandler = (e) => {
    if(e.target.id === "recommendedWorks") setWhichSelection("recommended");
    if(e.target.id === "popularWorks") setWhichSelection("popular");
    if(e.target.id === "allWorks") setWhichSelection("");
    if(query.length >= 1) setWhichSelection("search");
  }

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

          <div className="composerWorkList">
            <h3>Works</h3>
            <ul className="works-nav">
              <li id="allWorks" onClick={workSelectionHandler}>All({`${composerWorks.length}`})</li>
              <li id="recommendedWorks" onClick={workSelectionHandler}>Recommended({`${recommendedWorks.length}`})</li>
              <li id="popularWorks" onClick={workSelectionHandler}>Popular({`${popularWorks.length}`})</li>
            </ul>
            <ComposerWorks composer={composer} composerWorks={whichSelection === "search" ? workSelection : whichSelection === "recommended" ? recommendedWorks : whichSelection === "popular" ? popularWorks : composerWorks}/>
          </div>
        </div>
    </div>
  );
};

export default ComposerProfile;
