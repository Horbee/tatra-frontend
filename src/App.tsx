import "./App.css";

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
