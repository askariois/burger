import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import ForgotPage from "../pages/forgot/forgot";
import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import { NotFound404 } from "../pages/no-found/no-found";
import ProfilePage from "../pages/profile/profile";
import RegisterPage from "../pages/register/register";
import ResetPage from "../pages/reset/reset";

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPage />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
          <Route path="/ingredients/:id" exact={true}>
            <LoginPage />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
