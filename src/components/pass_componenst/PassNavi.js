import React from "react";
import "../../styles/PassNavi.css";

const PassNavi = (props) => {
  const { currentQ, number, click } = props;
  const n = [];
  const navi = () => {
    for (let index = 0; index < number; index++) {
      n.push(
        <li
          onClick={click.bind(this, index)}
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
