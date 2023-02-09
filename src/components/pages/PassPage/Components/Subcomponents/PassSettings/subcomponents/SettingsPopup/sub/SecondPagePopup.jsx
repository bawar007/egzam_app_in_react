import React, { useContext } from "react";
import { AppContext } from "../../../../../../Provider/provider";

const SecondPagePopup = ({ handleSQANSS }) => {
  const { handleClickRestart, setSettingsValue } = useContext(AppContext);

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

  return (
    <div>
      <button className="popup_btn" onClick={handleSQANSS}>
        porzuć ustawienia
      </button>
      <button className="popup_btn" onClick={handleSettingsQuitAndSaveSettings}>
        zapisz na później
      </button>
      <button className="popup_btn" onClick={handleClickRestart}>
        załaduj nowy test z ustawieniami
      </button>
    </div>
  );
};

export default SecondPagePopup;
