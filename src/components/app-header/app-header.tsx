import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, Link } from "react-router-dom";

import LeftButton from "./left-button/left-button";
import RightButton from "./right-button/right-button";

import header_styles from "./app-header.module.css";
import { LocationState } from "../../services/types/hooks";

function AppHeader() {
  const location = useLocation<LocationState>();
  return (
    <header className={`${header_styles.bg_navbar}`}>
      <div className={`${header_styles.container}`}>
        <nav className={`flex justify-between align-center pt-6 pb-6`}>
          <LeftButton />
          <Link to={{ pathname: "/", state: { from: location } }}>
            <Logo />
          </Link>
          <RightButton />
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
