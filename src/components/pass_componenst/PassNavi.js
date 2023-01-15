import React, { useContext } from "react";
import "../../styles/PassNavi.css";

import { AppContext } from "./provider";

const PassNavi = () => {
  const { handleNavi, currentQ, tableLength } = useContext(AppContext);
  const n = [];
  const navi = () => {
    for (let index = 0; index < tableLength; index++) {
      n.push(
        <li
          key={index}
          onClick={handleNavi.bind(this, index)}
          className={currentQ === index ? "activeNav" : null}
        >
          {index + 1}
        </li>
      );
    }
  };

  navi();
  const naviList = n.map((el) => el);

  return (
    <div className="pass_navi">
      <ul>{naviList}</ul>
    </div>
  );
};

export default PassNavi;
