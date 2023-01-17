import React, { useState } from "react";

import "../../styles/ContactPage.css";

const ContactPage = () => {
  const [state, setValue] = useState({
    value: "",
    isEmpty: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue((prevState) => {
      return { ...prevState, value: "" };
    });
  };

  const handleChange = (e) => {
    setValue(() => {
      return {
        value: e.target.value,
        isEmpty: false,
      };
    });
  };
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h3>Napisz do nas</h3>
        <textarea
          value={state.value}
          onChange={handleChange}
          placeholder="Napisz wiadomość..."
        ></textarea>
        <button>Wyślij</button>
      </form>
    </div>
  );
};

export default ContactPage;
