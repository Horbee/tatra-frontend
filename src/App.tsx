import "./App.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";

import React from "react";

import { GlobalStateProvider } from "./context/GlobalStateProvider";
import { HomePage } from "./pages/home/HomePage";
import { ServiceProvider } from "./services/ServiceProvider";

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ServiceProvider>
        <HomePage />
      </ServiceProvider>
    </GlobalStateProvider>
  );
};

export default App;
