import React from 'react';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import Modal from '../../../modal/modal';
import IngredientDetails from '../../../ingredient-details/ingredient-details';

import burgeringredient from "../burger-ingredient.module.css";




const CardBurgerIngredient = (props) => {
    const [isModalShown, setIsModalShown] = React.useState(false);

    const handleCloseModal = (e) => {
        setIsModalShown(false);
    }

    const handleOpenModal = () => {
        setIsModalShown(true);
    }

    return (
        <>
            <div className={`${burgeringredient.cursor_pointer} w-6-12 mb-8`} onClick={handleOpenModal}>
                <div className={`relative flex justify-center`}>
                    <img src={props.image} alt='Грустная собачка' />
                    <Counter count={2} size="default" />
                </div>
                <div className={`flex justify-center align-center`}>
                    <span className={`${burgeringredient.burger_counter} mt-1`}>{props.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${burgeringredient.burger_name} mt-1`}>
                    {props.name}
                </div>
            </div>
            {isModalShown && <Modal header="Детали ингредиента" close={handleCloseModal}>
                <IngredientDetails title="Бургер" image={props.image_large} name={props.name}  key={props._id} calories={props.calories} proteins={props.proteins} fat={props.fat} carbohydrates={props.carbohydrates} />
            </Modal>}
        </>
    );
}


CardBurgerIngredient.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
};

export default CardBurgerIngredient;
