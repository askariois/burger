import React, { useCallback } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import registr from "./registr.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  REGISTER_EMAIL,
  REGISTER_NAME,
  REGISTER_PASSWORD,
} from "../../services/actions/register";
import { useHistory, Redirect } from "react-router-dom";

export default function RegisterPage() {
  const registerUserData = useSelector((store) => store.registerUser);
  const userData = useSelector((store) => store.loginData);

  const [show, setShow] = React.useState(true);
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setShow(!show);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const onRegister = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        registerUser(
          registerUserData.name,
          registerUserData.email,
          registerUserData.password
        )
      );
    },
    [registerUserData.name, registerUserData.email, registerUserData.password]
  );
  if (registerUserData.registerRequest) history.push("/login");

  if (Object.keys(userData.data).length !== 0) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div className={registr.container}>
      <div className={registr.row}>
        <h2 className="mt-0">Регистрация</h2>
        <form action="" onSubmit={onRegister} className={registr.text_center}>
          <div>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) =>
                dispatch({
                  type: REGISTER_NAME,
                  payload: e.target.value,
                })
              }
              name={"registr_name"}
              error={false}
              value={registerUserData.name}
              ref={inputRef}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Input
              type={"email"}
              placeholder={"E-mail"}
              onChange={(e) =>
                dispatch({
                  type: REGISTER_EMAIL,
                  payload: e.target.value,
                })
              }
              name={"registr_email"}
              value={registerUserData.email}
              error={
                Boolean(registerUserData.email !== "") &&
                regex.test(registerUserData.email) === false
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
                  type: REGISTER_PASSWORD,
                  payload: e.target.value,
                })
              }
              icon={show ? "ShowIcon" : "HideIcon"}
              name={"registr_password"}
              value={registerUserData.password}
              error={false}
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mt-6">
            <Button type="primary" size="large">
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <div className={registr.text}>
          <div className="mt-20">
            Уже зарегистрированы ? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
