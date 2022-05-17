import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

import right_button from "./right-button.module.css";

function RightButton() {
  return (
    <Link
      to="/profile"
      className={`${right_button.tex_decoratinon_none} flex justify-between align-center mt-4 mb-4  mr-5`}
    >
      <ProfileIcon type="secondary" />
      <span className="ml-2 text-secondary text">Личный кабинет</span>
    </Link>
  );
}

export default RightButton;
