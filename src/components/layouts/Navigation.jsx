import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const list = [
  { name: "start", path: "/", state: "start" },
  { name: "egzamin", path: "/pass", state: "egzamin" },
  { name: "Wiki", path: "/wikisite", state: "Wiki" },
  { name: "kontakt", path: "/contact", state: "kontakt" },
];

const Navigation = () => {
  const [state, setState] = useState(false);

  const handleChange = () => {
    setState((p) => !p);
  };

  const menu = list.map((item) => (
    <li key={item.name} onClick={handleChange}>
      <NavLink to={item.path} state={item.state}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <section className="top-nav">
      <div>React App</div>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={state}
        onChange={handleChange}
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">{menu}</ul>
    </section>
  );
};

export default Navigation;
