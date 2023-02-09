import React, { useContext, useRef } from "react";
import SettingsYesNo from "./SettingsYesNo";
import { AppContext } from "../../../../../Provider/provider";
import SettingsPopup from "../SettingsPopup/SettingsPopup";

const Settings = ({ first }) => {
  const {
    handleChangeSelectValueSet,
    handleChangeNumber,
    handleClickRestart,
    newState,
    setSettingsValue,
    settingsValue,
  } = useContext(AppContext);

  const { items, value, showAccept } = settingsValue;

  const widtH = useRef(window.innerWidth);

  const handleAcceptSettings = () => {
    setSettingsValue((p) => {
      return { ...p, showAccept: true };
    });
  };

  const howManyAnswers = first ? newState.items : items;
  const inputRangeValue = first ? newState.items : items;
  const inputRangeName = first ? null : "settingsNumber";
  const divElementClassName = !first ? "setting second" : "setting";
  const selectValue = first ? newState.value : value;
  const selectName = first ? null : "settingsSelectValue";
  const buttonOnClick = first ? handleClickRestart : handleAcceptSettings;
  const title = first && <h4>Rozpocznij test</h4>;

  return (
    <div className={divElementClassName} style={first && { marginTop: "10%" }}>
      {title}
      <h4>Wybrana ilość pytań: {howManyAnswers}</h4>
      <input
        type="range"
        className="form-range"
        style={widtH.current > 700 ? { width: "50%" } : null}
        name={inputRangeName}
        onChange={handleChangeNumber}
        value={inputRangeValue}
        min="1"
        max="40"
        step="1"
      />
      <label className="passSelect label_settings">
        Rodzaj egzaminu:
        <select
          value={selectValue}
          onChange={handleChangeSelectValueSet}
          className="form-select form-select-sm"
          name={selectName}
        >
          <option value="ee8">EE8</option>
          <option value="ee9">EE9</option>
        </select>
      </label>
      <SettingsYesNo />
      <button
        onClick={buttonOnClick}
        className="btn btn-light btn-lg settings_btn"
      >
        Zaakceptuj
      </button>
      {showAccept && <SettingsPopup />}
    </div>
  );
};

export default Settings;
