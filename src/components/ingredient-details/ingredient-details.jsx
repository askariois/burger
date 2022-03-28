import burgerdetails from "./burger-details.module.css";
import PropTypes from 'prop-types';

function IngredientDetails(props) {


   
   return (
      <div>
         <div className='flex justify-center'>
            <img src={props.image} className={`${burgerdetails.img_width}`} />
         </div>
         <div className={`${burgerdetails.text_center} mt-4 mb-8`}>
            {props.name}
         </div>
         <div className={`${burgerdetails.details} flex justify-between`}>
            <div>
               <span>Калории,ккал</span>
               <span className={`${burgerdetails.details_count}`}>{props.calories}</span>
            </div>
            <div>
               <span>Белки, г</span>
               <span className={`${burgerdetails.details_count}`}>{props.proteins}</span>
            </div>
            <div>
               <span>Жиры, г</span>
               <span className={`${burgerdetails.details_count}`}>{props.fat}</span>
            </div>
            <div>
               <span>Углеводы, г</span>
               <span className={`${burgerdetails.details_count}`}>{props.carbohydrates}</span>
            </div>
         </div>
      </div >
   )
}

IngredientDetails.propTypes = {
   image: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   calories: PropTypes.number.isRequired,
   carbohydrates: PropTypes.number.isRequired,
   fat: PropTypes.number.isRequired,
   proteins: PropTypes.number.isRequired,
};

export default IngredientDetails;
