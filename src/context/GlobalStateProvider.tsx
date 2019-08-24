import React from "react";

import { GlobalStateContext } from "./StateContext";
import { useGlobalState } from "./useGlobalState";

export const GlobalStateProvider: React.FC = props => {
  const globalState = useGlobalState();

  return (
    <GlobalStateContext.Provider value={globalState}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
