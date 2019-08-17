import React from "react";

import { Container, Paper } from "@material-ui/core";

import { CustomTable } from "./CustomTable";

export const StartPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Paper style={{ height: 400, width: "100%" }}>
          <CustomTable />
        </Paper>
      </Container>
    </div>
  );
};
