import React, { useContext } from "react";
import { AppContext } from "./provider";

const PassNavi = () => {
  const { handleNavi, currentQ, tableSended } = useContext(AppContext);
  const n = [...tableSended];
  const naviList = n.map((el, index) => {
    return (
      <li
        key={el.id}
        onClick={handleNavi.bind(this, index)}
        className={
          currentQ === index
            ? "activeNav"
            : el.action
            ? "goodAnswer"
            : "badAnswer"
        }
      >
        {index + 1}
      </li>
    );
  });

  return (
    <div className="pass_navi">
      <ul className="pass_navi_list">{naviList}</ul>
    </div>
  );
};

export default PassNavi;
