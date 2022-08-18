import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from "../history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/home">
            <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
