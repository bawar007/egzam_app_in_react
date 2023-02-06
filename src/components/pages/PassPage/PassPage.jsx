import React, { useContext } from "react";

import PassResult from "./Components/PassResult/PassResult";
import PassInProgress from "./Components/PassInProgress/PassInProgress";
import { AppContext } from "./Provider/provider";
import PassSettings from "./Components/Subcomponents/PassSettings/PassSettings";

function PassPage() {
  const { newState } = useContext(AppContext);

  const { form, tableSended } = newState;

  return (
    <div className="pass_page">
      {form ? (
        <PassResult />
      ) : tableSended.length === 0 ? (
        <PassSettings first={true} />
      ) : (
        <PassInProgress />
      )}
    </div>
  );
}

export default PassPage;
