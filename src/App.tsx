import "./App.css";

import React from "react";

import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { HomePage } from "./pages/home/HomePage";

const App: React.FC = () => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <HomePage />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default App;
