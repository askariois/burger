import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register " exact={true}>
          <LoginPage />
        </Route>
        {/* <Route path="/forgot-password" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/reset-password" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/profile" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/ingredients/:id" exact={true}>
          <LoginPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
