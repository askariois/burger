import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-content/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-content/burger-constructor/burger-constructor";

import home from "./home.module.css";

export default function HomePage() {
  return (
    <div className={`${home.container}`}>
      <div className={`${home.flex} ${home.justify_between}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </div>
  );
}
