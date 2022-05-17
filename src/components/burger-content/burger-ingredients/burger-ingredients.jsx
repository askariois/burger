import React, { useEffect, useMemo, useState } from "react";

import TabsBurgerIngredients from "./tabs-burger-ingredients/tabs-burger-ingredients";
import CardBurgerIngredient from "./card-burger-ingredient/card-burger-ingredients";

import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

import burgeringredient from "./burger-ingredient.module.css";

function BurgerIngredients() {
  const { feed } = useSelector((state) => state.ingredient);

  const bun = useMemo(() => feed.filter((item) => item.type === "bun"), [feed]);
  const sauce = useMemo(
    () => feed.filter((item) => item.type === "sauce"),
    [feed]
  );
  const main = useMemo(
    () => feed.filter((item) => item.type === "main"),
    [feed]
  );

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0,
  });

  const [mainsRef, inViewMains] = useInView({
    threshold: 0,
  });

  const [saucesRef, inViewSauces] = useInView({
    threshold: 0,
  });

  return (
    <div className={`${burgeringredient.content_width}`}>
      <TabsBurgerIngredients
        inViewBuns={inViewBuns}
        inViewMains={inViewMains}
        inViewSauces={inViewSauces}
      />

      <div className={`${burgeringredient.scroll}`}>
        <div className={`mt-10`}>
          <h2 id="buns" ref={bunsRef}>
            Булки
          </h2>
          <div className={`flex flex-wrap`}>
            {bun.map((item) => {
              return <CardBurgerIngredient key={item._id} {...item} />;
            })}
          </div>
        </div>
        <div className={`mt-10`}>
          <h2 id="sauces" ref={saucesRef}>
            Соусы
          </h2>
          <div className={`flex flex-wrap`}>
            {sauce.map((item) => {
              return <CardBurgerIngredient key={item._id} {...item} />;
            })}
          </div>
        </div>
        <div className={`mt-10`}>
          <h2 id="mains" ref={mainsRef}>
            Начинки
          </h2>
          <div className={`flex flex-wrap`}>
            {main.map((item) => {
              return <CardBurgerIngredient key={item._id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
