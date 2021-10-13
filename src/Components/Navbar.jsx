import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";

const Navbar = () => {
  const { data } = useContext(DataContext);
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [reset, setReset] = useState(true);

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempArr = data.filter((composer) => {
      return composer.complete_name.toLowerCase().includes(query);
    });
    setSearchList(tempArr);
    setQuery("");
    setReset(false);
  };

  return (
    <div className="navbar">
      <h1>aChord</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="composerName"
            id="composerName"
            value={query}
            placeholder="search for composer"
          />
        </div>
        <div className="buttons">
          <button type="submit">Search</button>
          <button
            onClick={() => {
              setReset(!reset);
              setSearchList(data);
            }}
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="nav-menu">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink exact to="/signup" activeClassName="active">
          Signup
        </NavLink>
        <NavLink exact to="/login" activeClassName="active">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
