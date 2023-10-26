import "./App.css";
// import Accounttype from "./Pages/Accounttype";
// // import Home from "./Pages/Home";
import Home2 from "./home2";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

// function App() {
//   return (
//     <div className="App">
//       {/* <Home /> */}
//       <Home2 />

//     </div>
function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <AccountDetails />
        </Paper>
        <Home2 />
      </Container>
    </>
  );
}

export default App;
