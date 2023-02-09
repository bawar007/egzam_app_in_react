import React, { useContext } from "react";
import { AppContext } from "../../../../../Provider/provider";

const SettingsYesNo = () => {
  const { setSettingsValue, settingsValue } = useContext(AppContext);

  const handleAuto = () => {
    setSettingsValue((prev) => {
      return {
        ...prev,
        autoNextQuestion: !prev.autoNextQuestion,
      };
    });
  };

  const { autoNextQuestion } = settingsValue;

  return (
    <div className="yes_no form-switch">
      <h1>Przełączanie automatyczne pytań</h1>
      <div>
        <label
          className="form-check-label label_settings"
          htmlFor="flexSwitchCheck"
          style={autoNextQuestion ? null : { color: "red" }}
        >
          NIE
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheck"
          onChange={handleAuto}
          checked={autoNextQuestion}
          style={{
            margin: 0,
          }}
        />
        <label
          className="form-check-label label_settings"
          htmlFor="flexSwitchCheck"
          style={autoNextQuestion ? { color: "green" } : null}
        >
          TAK
        </label>
      </div>
    </div>
  );
};

export default SettingsYesNo;
