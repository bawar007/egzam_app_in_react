import React, { useContext } from "react";
import { AppContext } from "../../../../../Provider/provider";

const SettingPopup = () => {
  const { handleClickRestart, setSettingsValue, newState, settingsValue } =
    useContext(AppContext);

  const handleSettingsQuitAndNoSaveSettings = () =>
    setSettingsValue((p) => {
      return {
        showAccept: false,
        visibility: false,
        value: newState.value,
        checked: false,
        items: newState.items,
      };
    });

  const handleSettingsQuitAndSaveSettings = () => {
    setSettingsValue((p) => {
      return {
        ...p,
        checked: true,
        visibility: false,
        showAccept: false,
      };
    });
  };

  const handleResetSettings = () => {
    setSettingsValue((p) => {
      return {
        ...p,
        value: newState.value,
        checked: false,
        items: newState.items,
      };
    });
  };

  const handleSettingsSaveSettings = () =>
    setSettingsValue((p) => {
      return {
        ...p,
        checked: true,
      };
    });

  const handleGoBack = () =>
    setSettingsValue((p) => {
      return { ...p, checked: false };
    });

  return (
    <div className="settings_popup">
      <div>
        <div>
          {settingsValue.checked && (
            <i
              className="fa-solid fa-angle-left myArrow popup_CloseBtn"
              onClick={handleGoBack}
            ></i>
          )}
        </div>
        <div>
          <button
            onClick={handleSettingsQuitAndNoSaveSettings}
            className="popup_CloseBtn"
          >
            X
          </button>
        </div>
      </div>
      {settingsValue.checked ? (
        <div>
          <button
            className="popup_btn"
            onClick={handleSettingsQuitAndNoSaveSettings}
          >
            porzuć ustawienia
          </button>
          <button
            className="popup_btn"
            onClick={handleSettingsQuitAndSaveSettings}
          >
            zapisz na później
          </button>
          <button className="popup_btn" onClick={handleClickRestart}>
            załaduj nowy test z ustawieniami
          </button>
        </div>
      ) : (
        <>
          <div>
            <button className="popup_btn" onClick={handleSettingsSaveSettings}>
              zapisz
            </button>
            <button className="popup_btn" onClick={handleResetSettings}>
              resetuj
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingPopup;
