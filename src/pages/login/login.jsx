import React, { useCallback, useEffect } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import login from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
} from "../../services/actions/login";
import { useHistory, Redirect, Link, useLocation } from "react-router-dom";

export default function LoginPage() {
  const loginUserData = useSelector((store) => store.loginUser);
  const userData = useSelector((store) => store.loginData);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [show, setShow] = React.useState(true);
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setShow(!show);
  };

  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginUser(loginUserData.email, loginUserData.password));
    },
    [loginUserData.email, loginUserData.password]
  );

  useEffect(() => {
    if (loginUserData.loginSuccess) history.push("/");
  }, [loginUserData.loginSuccess]);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (Object.keys(userData.data).length !== 0) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;
  }

  return (
    <div className={login.container}>
      <div className={login.row}>
        <h2 className="mt-0">Вход</h2>
        <form action="" className={login.text_center} onSubmit={onLogin}>
          <div>
            <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) =>
                dispatch({
                  type: LOGIN_EMAIL,
                  payload: e.target.value,
                })
              }
              name={"login_email"}
              value={loginUserData.email}
              error={
                Boolean(loginUserData.email !== "") &&
                regex.test(loginUserData.email) === false
                  ? true
                  : false
              }
              ref={inputRef}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={show ? "password" : "text"}
              placeholder={"Пароль"}
              onChange={(e) =>
                dispatch({
                  type: LOGIN_PASSWORD,
                  payload: e.target.value,
                })
              }
              icon={show ? "ShowIcon" : "HideIcon"}
              name={"login_password"}
              error={false}
              value={loginUserData.password}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Button type="primary" size="large">
              Войти
            </Button>
          </div>
        </form>
        <div className={login.text}>
          <div className="mt-20">
            Вы — новый пользователь?{" "}
            <Link to="/register">Зарегистрироваться</Link>
          </div>
          <div className="mt-4">
            Забыли пароль?
            <Link to="/forgot-password"> Восстановить пароль</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
