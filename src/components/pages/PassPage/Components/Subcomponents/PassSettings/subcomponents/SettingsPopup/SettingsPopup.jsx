import React, { useContext } from "react";
import { AppContext } from "../../../../../Provider/provider";

const SettingPopup = () => {
  const { handleClickRestart, setSettingsValue, newState } =
    useContext(AppContext);

  const handleSettingsLoadNewTest = () => {
    setSettingsValue((p) => {
      return {
        ...p,
        visibility: false,
        showAccept: false,
        checked: true,
      };
    });
    handleClickRestart();
  };

  const handleSettingsQuitAndNoSaveSettings = () =>
    setSettingsValue((p) => {
      return {
        showAccept: false,
        visibility: true,
        value: newState.value,
        checked: false,
        items: newState.items,
      };
    });

  const handleSettingsSaveSettings = () =>
    setSettingsValue((p) => {
      return {
        ...p,
        checked: true,
        showAccept: false,
        visibility: false,
      };
    });

  return (
    <div className="settings_btn">
      <button onClick={handleSettingsQuitAndNoSaveSettings}>X</button>
      <button
        className="btn btn-light btn-sm"
        onClick={handleSettingsLoadNewTest}
      >
        załaduj nowy test
      </button>
      <button
        className="btn btn-light btn-sm"
        onClick={handleSettingsSaveSettings}
      >
        zapisz ustawienia na później
      </button>
      <button
        className="btn btn-light btn-sm"
        onClick={handleSettingsQuitAndNoSaveSettings}
      >
        porzuć ustawienia
      </button>
    </div>
  );
};

export default SettingPopup;
