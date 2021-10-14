import React, { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { DataContext } from "../context/Context";

const Navbar = () => {
  const { data, user, composerFilter, setComposerFilter } = useContext(DataContext);
  const history = useHistory();
  
  const handleChange = (e) => {
    const query = e.target.value;
    setComposerFilter(query);
  };

  const resetHandler = () => {
    setComposerFilter("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/composers");
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>aChord</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e) => handleChange(e)} type="text" name="composerName" id="composerName" value={composerFilter} placeholder="Search for a Composer" />
        </div>
        <div className="buttons">
          <button type="submit">Search</button>
          <button onClick={resetHandler} type="reset">Reset</button>
        </div>
      </form>

      <div className="nav-menu">
        <NavLink to="/composers" className="home-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="about-link" activeClassName="active">
          About
        </NavLink>
        <NavLink to={user != null ? "/userprofile" : "/login"} className="user-link" activeClassName="user-active">
          🏠
        </NavLink>
        {/* <NavLink exact to="/signup" activeClassName="active">
        Signup
        </NavLink>
        <NavLink exact to="/login" activeClassName="active">
          Login
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
