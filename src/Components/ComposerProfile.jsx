import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import ComposerWorks from "./ComposerWorks";
import SearchWorks from "./SearchWorks";

const ComposerProfile = () => {
  const location = useLocation();
  const {composer} = location.state;

  const [composerWorks, setComposerWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [toggleWorks, setToggleWorks] = useState(false);

  const [searched, setSearched] = useState([]);
  const [toggleSearched, setToggleSearched] = useState(false);
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const composerInfo = await (await fetch(`http://localhost:5000/composers/${composer._id}`)
      ).json();
      setComposerWorks(composerInfo.works);
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const composer = await (
      await fetch(
        `https://api.openopus.org/work/list/composer/${composer.id}/genre/all.json`
      )
    ).json();
    setWorks(composer.works);
    setToggleWorks(!toggleWorks);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const composer = await (
      await fetch(
        `https://api.openopus.org/work/list/composer/${composer.id}/genre/all.json`
      )
    ).json();
    if (query.length > 0) {
      const tempArr = composer.works.filter((work) => {
        return work.title.toLowerCase().includes(query);
      });
      setSearched(tempArr);
      if (!toggleSearched) {
        setToggleSearched(!toggleSearched);
      }
      setQuery("");
      setReset(false);
    }
  };

  const resetHandler = () => {
    setReset(!reset);
    setSearched([]);
    if (toggleSearched) {
      setToggleSearched(!toggleSearched);
    }
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

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="workSearch">
              <label htmlFor="searchWorks">Search Works: </label>
              <input onChange={(e) => handleChange(e)} type="text" name="searchWorks" id="searchWorks" value={query}/>
              <div className="searchButtons">
                <input type="submit" value="Search" />
                <input onClick={resetHandler} type="reset" value="Clear" />
              </div>
            </div>
          </form>

          <ComposerWorks composer={composer} composerWorks={composerWorks}/>

          {toggleWorks ? (
            <ComposerWorks composerWorks={composerWorks}/>
          ) : null}
          {toggleSearched ? (
            <SearchWorks works={searched} composer={composer} />
          ) : null}
        </div>
    </div>
  );
};

export default ComposerProfile;
