import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { DataContext } from "../context/Context";

const Navbar = () => {
  const { data, user } = useContext(DataContext);
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

  const resetHandler = () => {
    setReset(!reset);
    setSearchList(data);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>aChord</h1>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={query} placeholder="search for composer" />
        </div>
        <div className="buttons">
          <button type="submit">Search</button>
          <button onClick={resetHandler} type="reset">Reset</button>
        </div>
      </form>

      <div className="nav-menu">
        <NavLink exact to="/composers" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        {user
        ? <NavLink exact to={`/userprofile`} activeClassName="active">
        Profile
        </NavLink>
        :<>
          <NavLink exact to="/signup" activeClassName="active">
          Signup
          </NavLink>
          <NavLink exact to="/login" activeClassName="active">
            Login
          </NavLink>
        </>
        }
      </div>
    </div>
  );
};

export default Navbar;
