import React, { useContext } from "react";
import { AppContext } from "../../../../../Provider/provider";
import FirstPagePopup from "./sub/FirstPagePopup";
import SecondPagePopup from "./sub/SecondPagePopup";

const SettingPopup = () => {
  const { setSettingsValue, newState, settingsValue } = useContext(AppContext);

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
        <SecondPagePopup handleSQANSS={handleSettingsQuitAndNoSaveSettings} />
      ) : (
        <FirstPagePopup />
      )}
    </div>
  );
};

export default SettingPopup;
