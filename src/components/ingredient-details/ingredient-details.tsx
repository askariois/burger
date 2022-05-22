import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import burgerdetails from "./burger-details.module.css";
import { TRootState } from "../../services/types/redux";

function IngredientDetails() {
  const { ingredientId }: { ingredientId: string } = useParams();
  const feed = useSelector((state: TRootState) => state.ingredient);
  let ingredient: any = "";
  if (feed.feedRequest) {
    ingredient = feed.feed.find(({ _id }: { _id: string }) => _id === ingredientId);
  }
  return (
    <>
      {feed.feedRequest && (
        <div className={burgerdetails.container}>
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
      )}
    </>
  );
}

export default IngredientDetails;
