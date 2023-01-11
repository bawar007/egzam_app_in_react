import React from "react";
import "../../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "start", path: "/", state: "start" },
  { name: "egzamin", path: "/pass", state: "egzamin" },
  { name: "strefa wiedzy", path: "/wikisite", state: "strefa wiedzy" },
  { name: "kontakt", path: "/contact", state: "kontakt" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} state={item.state}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navigation">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
