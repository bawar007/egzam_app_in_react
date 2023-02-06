import React, { useContext } from "react";
import { AppContext } from "../../../../Provider/provider";

const NaviList = ({ index, action }) => {
  const { newState, setState } = useContext(AppContext);

  const currentQ = newState.currentQuestion;

  const handleNavi = (a) => {
    setState((prevState) => {
      return { ...prevState, currentQuestion: a };
    });
  };

  return (
    <li
      key={index}
      onClick={handleNavi.bind(this, index)}
      className={
        newState.form
          ? currentQ === index
            ? "activeNav myLi"
            : action
            ? "goodAnswer myLi"
            : "badAnswer myLi"
          : currentQ === index
          ? "activeNav myLi"
          : "myLi"
      }
    >
      {index + 1}
    </li>
  );
};

export default NaviList;
