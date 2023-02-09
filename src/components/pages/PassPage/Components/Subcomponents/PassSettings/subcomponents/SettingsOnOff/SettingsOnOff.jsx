import React, { useContext } from "react";

import PassSettings from "../../PassSettings";
import { AppContext } from "../../../../../Provider/provider";

const SettingsOnOff = () => {
  const { settingsValue, setSettingsValue } = useContext(AppContext);

  const showSettings = () => {
    setSettingsValue((p) => {
      return { ...p, visibility: !p.visibility };
    });
  };

  return (
    <div className="changeAnswers">
      <div className="changeSettings">
        <i className="fa-solid fa-gear fa-lg" onClick={showSettings}></i>
      </div>
      {settingsValue.visibility && <PassSettings />}
    </div>
  );
};

export default SettingsOnOff;
