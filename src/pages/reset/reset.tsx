import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { TRootState } from "../../services/types/redux";

export default function ResetPage() {
  const resetPassword = useSelector((store: TRootState) => store.resetPassword);
  const userData = useSelector((store: TRootState) => store.loginData);
  const forgotPasswordResult = useSelector(
    (store: TRootState) => store.forgotPassword.postForgotSuccess
  );
  const resetPasswordResult = useSelector(
    (store: TRootState) => store.resetPassword.resetPasswordSuccess
  );

  const [show, setShow] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current!.focus(), 0);
    setShow(!show);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const onResetPassword = useCallback(
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
        <form action="" className={reset.row} onSubmit={onResetPassword}>
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
            <Button type="primary" size="large">
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
