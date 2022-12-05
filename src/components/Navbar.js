import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let Capitalize = (word) => {
    let low = word.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  };

  let location = useLocation()

  const handlecountry = async(e)=>{
    const value = e.target.value
    props.setCountry(value)
  }

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg bg-${props.mode} navbar-${props.mode
          } text-${props.mode === "light" ? "dark" : "white-50"}`}
        style={{ borderBottom: props.mode === "light" ? "1px solid #d3d3d3" : "1px solid #424242" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">General</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link></li>
              <li className={`nav-item unique ${props.mode}`}><Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link></li>
              <select name="country" id="selectCountry"  className={`bg-${props.mode}`} onChange={(e)=>{ handlecountry(e)}}>
                <option value="in" >India</option>
                <option value="us" >United States</option>
                <option value="cn" >China</option>
                <option value="jp" >Japan</option>
                <option value="kr" >South Korea</option>
                <option value="id" >Indonesia</option>
              </select>
            </ul>
            <div className="form-check form-switch">
              <input
                className={`form-check-input text-`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${props.mode === "light" ? "dark" : "white"
                  }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {Capitalize(props.mode === "light" ? "dark" : "light")} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
