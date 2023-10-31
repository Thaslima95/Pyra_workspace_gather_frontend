import React from "react";
import AccountDetails from "../Components/AccountDetails/AccountDetails";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

export default function AccountCreation() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <AccountDetails />
        </Paper>
      </Container>
    </>
  );
}
