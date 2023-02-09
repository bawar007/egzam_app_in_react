import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [x, setX] = useState(1);

  const handleClickNext = () => {
    setX((p) => {
      if (p < 3 && p >= 1) {
        return p + 1;
      } else {
        return 1;
      }
    });
  };

  const handleClickBack = () => {
    setX((p) => {
      if (p <= 3 && p > 1) {
        return p - 1;
      } else {
        return 3;
      }
    });
  };

  return (
    <div className="homePage">
      <h2>Witaj na naszej stronie</h2>
      <div className="img">
        <button className="backPicture" onClick={handleClickBack}></button>
        <button className="nextPicture" onClick={handleClickNext}></button>
        <img
          src={`https://bawar007.github.io/egzam_app_in_react/picture/img${x}.jpg`}
          alt={`pic${x}`}
        />
      </div>
      <p>
        Tutaj nauczyć się wielu ciekawych rzeczy, które pomogą Ci zdać przyszłe
        egzaminy zawodowe z zakresu informatyki.
      </p>
      <div className="my_buttons">
        <NavLink to="/pass" state="egzamin">
          rozpocznij egzamin
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
