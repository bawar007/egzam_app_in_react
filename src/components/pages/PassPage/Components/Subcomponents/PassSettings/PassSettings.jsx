import React, { useContext, useRef } from "react";

import { AppContext } from "../../../Provider/provider";
import SettingPopup from "./subcomponents/SettingsPopup/SettingsPopup";

const PassSettings = ({ first, showSetting }) => {
  const {
    handleChangeNumber,
    settingsValue,
    handleChangeSelectValueSet,
    setSettingsValue,
    handleClickRestart,
    newState,
  } = useContext(AppContext);

  const width = useRef(window.innerWidth);

  const handleAuto = () => {
    setSettingsValue((prev) => {
      return {
        ...prev,
        autoNextQuestion: !prev.autoNextQuestion,
      };
    });
  };

  const handleAcceptSettings = () => {
    setSettingsValue((p) => {
      return { ...p, showAccept: true };
    });
  };

  const { items, value, autoNextQuestion, showAccept } = settingsValue;

  return (
    <div className="settingsBackground">
      <div className="setting">
        {first && <h4>Rozpocznij test</h4>}
        <h4>Wybrana ilość pytań: {first ? newState.items : items}</h4>
        <input
          type="range"
          value={first ? newState.items : items}
          onChange={handleChangeNumber}
          min="1"
          max="40"
          step="1"
          className="form-range"
          style={width > 700 ? { width: "50%" } : null}
          name={first ? null : "settingsNumber"}
        />
        <label>
          Rodzaj egzaminu:
          <select
            value={first ? newState.value : value}
            onChange={handleChangeSelectValueSet}
            className="form-select form-select-sm"
            name={first ? null : "settingsSelectValue"}
            style={
              width > 700
                ? {
                    width: "30%",
                    marginBottom: 20,
                    marginLeft: 10,
                    display: "inline",
                  }
                : null
            }
          >
            <option value="ee8">EE8</option>
            <option value="ee9">EE9</option>
          </select>
        </label>

        <div className="yes_no form-switch">
          <h1>Przełączanie automatyczne pytań</h1>
          <div>
            <label
              className="form-check-label"
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
              className="form-check-label"
              htmlFor="flexSwitchCheck"
              style={autoNextQuestion ? { color: "green" } : null}
            >
              TAK
            </label>
          </div>
        </div>
        <button
          onClick={first ? handleClickRestart : handleAcceptSettings}
          className="btn btn-light btn-lg"
        >
          Zaakceptuj
        </button>
        {showAccept && <SettingPopup />}
      </div>
    </div>
  );
};

export default PassSettings;
