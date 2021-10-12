import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ComposerWorks from "./ComposerWorks";
import SearchWorks from "./SearchWorks";

const ComposerProfile = () => {
  let params = useParams();
  const [composerData, setComposerData] = useState([]);
  const [works, setWorks] = useState([]);
  const [toggleWorks, setToggleWorks] = useState(false);

  const [searched, setSearched] = useState([]);
  const [toggleSearched, setToggleSearched] = useState(false);
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const composerInfo = await (
        await fetch(
          `https://api.openopus.org/composer/list/search/${params.id}.json`
        )
      ).json();
      setComposerData(composerInfo.composers);
    }
    fetchData();
  }, [params.id]);

  const handleClick = async () => {
    const composer = await (
      await fetch(
        `https://api.openopus.org/work/list/composer/${composerData[0].id}/genre/all.json`
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
        `https://api.openopus.org/work/list/composer/${composerData[0].id}/genre/all.json`
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

  return (
    <div className="composerProfileContainer">
      {composerData[0] && (
        <div>
          <h2>{composerData[0].complete_name}</h2>

          <div>
            <img src={composerData[0].portrait} alt="" />
          </div>

          <Link to="/composers">
            <button>Back</button>
          </Link>

          <p>
            {composerData[0].birth.substring(0, 4)} -{" "}
            {composerData[0].death === null
              ? "present"
              : composerData[0].death.substring(0, 4)}
          </p>
          <p>Time Period: {composerData[0].epoch}</p>

          <button onClick={() => handleClick()}>
            {toggleWorks ? "Hide Popular Works" : "Show Popular Works"}
          </button>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="workSearch">
              <label htmlFor="searchWorks">Search Works: </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="searchWorks"
                id="searchWorks"
                value={query}
              />
              <div className="searchButtons">
                <input type="submit" value="Search" />
                <input
                  onClick={() => {
                    setReset(!reset);
                    setSearched([]);
                    if (toggleSearched) {
                      setToggleSearched(!toggleSearched);
                    }
                  }}
                  type="reset"
                  value="Clear"
                />
              </div>
            </div>
          </form>

          {toggleWorks ? (
            <ComposerWorks works={works} composerData={composerData} />
          ) : null}
          {toggleSearched ? (
            <SearchWorks works={searched} composerData={composerData} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ComposerProfile;
