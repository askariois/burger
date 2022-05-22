import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import ForgotPage from "../../pages/forgot/forgot";
import { userGetData } from "../../services/actions/profile";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import { NotFound404 } from "../../pages/no-found/no-found";
import ProfilePage from "../../pages/profile/profile";
import { ProtectedRoute } from "../../pages/protected-route";
import RegisterPage from "../../pages/register/register";
import ResetPage from "../../pages/reset/reset";
import { CLOSE_MODAL } from "../../services/actions/item-to-view";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrdersPage from "../../pages/profile/orders/orders";

function ModalSwitch() {
  const location = useLocation<{ background?: null | undefined }>();
  const history = useHistory();
  const dispatch = useDispatch();

  const background = location.state && location.state.background;

  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MODAL,
      modal: false,
    });
    history.goBack();
  };

  useEffect(() => {
    dispatch(userGetData());
  }, [dispatch, location, history]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
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
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <OrdersPage />
        </ProtectedRoute>

        <Route path="/ingredients/:ingredientId" exact={true}>
          <IngredientDetails />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {background && (
        <Route
          path="/ingredients/:ingredientId"
          children={
            <Modal close={handleCloseModal} header="Детали ингредиента">
              <IngredientDetails />
            </Modal>
          }
        />
      )}
    </>
  );
}

export default ModalSwitch;
