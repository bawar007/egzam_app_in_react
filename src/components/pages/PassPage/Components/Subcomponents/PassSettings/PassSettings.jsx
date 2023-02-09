import React, { useContext, useRef } from "react";

import { AppContext } from "../../../Provider/provider";
import SettingPopup from "./subcomponents/SettingsPopup/SettingsPopup";

const PassSettings = ({ first }) => {
  const {
    handleChangeNumber,
    settingsValue,
    handleChangeSelectValueSet,
    setSettingsValue,
    handleClickRestart,
    newState,
  } = useContext(AppContext);

  const widtH = useRef(window.innerWidth);

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
    <div
      className={first ? null : "settingsBackground"}
      style={first ? { padding: "0 10px" } : null}
    >
      <div
        className={!first ? "setting second" : "setting"}
        style={first && { marginTop: "10%" }}
      >
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
          style={widtH.current > 700 ? { width: "50%" } : null}
          name={first ? null : "settingsNumber"}
        />
        <label className="passSelect label_settings">
          Rodzaj egzaminu:
          <select
            value={first ? newState.value : value}
            onChange={handleChangeSelectValueSet}
            className="form-select form-select-sm"
            name={first ? null : "settingsSelectValue"}
          >
            <option value="ee8">EE8</option>
            <option value="ee9">EE9</option>
          </select>
        </label>

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
        <button
          onClick={first ? handleClickRestart : handleAcceptSettings}
          className="btn btn-light btn-lg settings_btn"
        >
          Zaakceptuj
        </button>
        {showAccept && <SettingPopup />}
      </div>
    </div>
  );
};

export default PassSettings;
