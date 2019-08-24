import "./App.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";

import React from "react";

import { GlobalStateContext } from "./context/StateContext";
import { useGlobalState } from "./context/useGlobalState";
import { HomePage } from "./pages/home/HomePage";
import { ServiceProvider } from "./services/ServiceProvider";

const App: React.FC = () => {
  const globalState = useGlobalState();
  return (
    <GlobalStateContext.Provider value={globalState}>
      <ServiceProvider>
        <HomePage />
      </ServiceProvider>
    </GlobalStateContext.Provider>
  );
};

export default App;
