import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import burgerdetails from "./burger-details.module.css";
import { loadIngredients } from "../../services/actions";
import { useEffect } from "react";

function IngredientDetails() {
  const { feed } = useSelector((state) => state.ingredient);
  const { ingredientId } = useParams();
  const ingredient = feed.find(({ _id }) => _id === ingredientId);

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={ingredient.image_large}
          className={`${burgerdetails.img_width}`}
        />
      </div>
      <div className={`${burgerdetails.text_center} mt-4 mb-8`}>
        {ingredient.name}
      </div>
      <div className={`${burgerdetails.details} flex justify-between`}>
        <div>
          <span>Калории,ккал</span>
          <span className={`${burgerdetails.details_count}`}>
            {ingredient.calories}
          </span>
        </div>
        <div>
          <span>Белки, г</span>
          <span className={`${burgerdetails.details_count}`}>
            {ingredient.proteins}
          </span>
        </div>
        <div>
          <span>Жиры, г</span>
          <span className={`${burgerdetails.details_count}`}>
            {ingredient.fat}
          </span>
        </div>
        <div>
          <span>Углеводы, г</span>
          <span className={`${burgerdetails.details_count}`}>
            {ingredient.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
