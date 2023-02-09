import React, { useContext } from "react";
import { AppContext } from "../../../../../../Provider/provider";

const FirstPagePopup = () => {
  const { setSettingsValue, newState } = useContext(AppContext);

  const handleSettingsSaveSettings = () =>
    setSettingsValue((p) => {
      return {
        ...p,
        checked: true,
      };
    });

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

  return (
    <div>
      <button className="popup_btn" onClick={handleSettingsSaveSettings}>
        zapisz
      </button>
      <button className="popup_btn" onClick={handleResetSettings}>
        resetuj
      </button>
    </div>
  );
};

export default FirstPagePopup;
