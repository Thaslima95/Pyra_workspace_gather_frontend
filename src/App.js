import logo from "./logo.svg";
import "./App.css";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function App() {
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

export default App;
