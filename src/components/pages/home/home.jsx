import { useEffect } from "react";

import BurgerIngredients from "../../burger-content/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../burger-content/burger-constructor/burger-constructor";

import home from "./home.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../../../services/actions";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  return (
    <>
      <div className={`${home.container}`}>
        <div className={`${home.flex} ${home.justify_between}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </div>
    </>
  );
}
