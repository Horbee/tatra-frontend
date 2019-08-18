import "./App.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";

import React from "react";

import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { StartPage } from "./pages/home/StartPage";

const App: React.FC = () => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <StartPage />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default App;
