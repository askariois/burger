import React, { useCallback, useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import reset from "./reset.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPasswordRequest,
  RESET_PASSWORD_CODE,
  RESET_PASSWORD_PASSWORD,
} from "../../services/actions/reset-password";
import { useHistory, Redirect } from "react-router-dom";

export default function ResetPage() {
  const resetPassword = useSelector((store) => store.resetPassword);
  const userData = useSelector((store) => store.loginData);
  const forgotPasswordResult = useSelector(
    (store) => store.forgotPassword.postForgotSuccess
  );
  const resetPasswordResult = useSelector(
    (store) => store.resetPassword.resetPasswordSuccess
  );

  const [show, setShow] = React.useState(true);
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setShow(!show);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  let onResetPassword = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        resetPasswordRequest(resetPassword.password, resetPassword.code)
      );
    },
    [resetPassword.password, resetPassword.code]
  );

  useEffect(() => {
    if (!forgotPasswordResult) history.push("/forgot-password");
  }, [dispatch]);

  useEffect(() => {
    if (resetPasswordResult) history.push("/login");
  }, [resetPasswordResult, history]);

  if (Object.keys(userData.data).length !== 0) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <div className={reset.container}>
      <div className={reset.row}>
        <h2 className="mt-0">Восстановление пароля</h2>
        <form action="" className={reset.row}>
          <div>
            <Input
              type={show ? "password" : "text"}
              placeholder={"Введите новый пароль"}
              onChange={(e) =>
                dispatch({
                  type: RESET_PASSWORD_PASSWORD,
                  payload: e.target.value,
                })
              }
              name={"password"}
              icon={show ? "ShowIcon" : "HideIcon"}
              onIconClick={onIconClick}
              value={resetPassword.password}
              ref={inputRef}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={(e) =>
                dispatch({
                  type: RESET_PASSWORD_CODE,
                  payload: e.target.value,
                })
              }
              name={"code"}
              value={resetPassword.code}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Button type="primary" size="large" onClick={onResetPassword}>
              Сохранить
            </Button>
          </div>
        </form>
        <div className={reset.text}>
          <div className="mt-20">
            Вспомнили пароль ? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
