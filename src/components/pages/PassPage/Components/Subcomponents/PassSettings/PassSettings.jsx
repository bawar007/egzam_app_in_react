import React from "react";

import Settings from "./subcomponents/Settings/Settings";

const PassSettings = ({ first }) => {
  return (
    <div
      className={first ? null : "settingsBackground"}
      style={first ? { padding: "0 10px" } : null}
    >
      <Settings first={first} />
    </div>
  );
};

export default PassSettings;
