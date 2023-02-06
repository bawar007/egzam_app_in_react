import React, { useContext } from "react";

import { AppContext } from "../../../Provider/provider";

const PassSettins = () => {
  const {
    handleChangeNumber,
    settingsValue,
    handleChangeSelectValueSet,
    handleClickRestart,
    setSettingsValue,
    newState,
  } = useContext(AppContext);

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

  const handleSettings = (e) => {
    if (e === "lnT") {
      handleClickRestart();
      setSettingsValue((p) => {
        return {
          ...p,
          visibility: false,
          showAccept: false,
          checked: true,
        };
      });
    } else if (e === "quitS") {
      setSettingsValue((p) => {
        return {
          showAccept: false,
          visibility: true,
          value: newState.value,
          checked: false,
          items: newState.items,
        };
      });
    } else if (e === "ssP") {
      setSettingsValue((p) => {
        return {
          ...p,
          checked: true,
          showAccept: false,
          visibility: false,
        };
      });
    } else if (e === "qS") {
      setSettingsValue((p) => {
        return { ...p, showAccept: false };
      });
    }
  };

  return (
    <div className="setting">
      <h4>Wybrana ilość pytań: {settingsValue.items}</h4>
      <input
        type="range"
        value={settingsValue.items}
        onChange={handleChangeNumber}
        min="1"
        max="40"
        step="1"
        className="form-range"
        style={{ width: "50%" }}
        name="settingsNumber"
      />
      <br />
      Rodzaj egzaminu:
      <select
        value={settingsValue.value}
        onChange={handleChangeSelectValueSet}
        className="form-select form-select-sm"
        name="settingsSelectValue"
        style={{
          width: "30%",
          marginBottom: 20,
          marginLeft: 10,
          display: "inline",
        }}
      >
        <option value="ee8">EE8</option>
        <option value="ee9">EE9</option>
      </select>
      <div className="yes_no form-switch">
        <h1>Przełączanie automatyczne pytań</h1>
        <div>
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheck"
            style={settingsValue.autoNextQuestion ? null : { color: "red" }}
          >
            NIE
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheck"
            onChange={handleAuto}
            checked={settingsValue.autoNextQuestion}
            style={{
              margin: 0,
            }}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheck"
            style={settingsValue.autoNextQuestion ? { color: "green" } : null}
          >
            TAK
          </label>
        </div>
      </div>
      <button onClick={handleAcceptSettings} className="btn btn-light btn-lg">
        Zaakceptuj
      </button>
      {settingsValue.showAccept ? (
        <div className="settings_btn">
          <button onClick={handleSettings.bind(this, "qS")}>X</button>
          <button
            className="btn btn-light btn-sm"
            onClick={handleSettings.bind(this, "lnT")}
          >
            załaduj nowy test
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={handleSettings.bind(this, "ssP")}
          >
            zapisz ustawienia na później
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={handleSettings.bind(this, "quitS")}
          >
            porzuć ustawienia
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PassSettins;
