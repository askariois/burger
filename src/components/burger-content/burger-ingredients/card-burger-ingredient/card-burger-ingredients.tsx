import React from 'react';
import burgeringredient from "../burger-ingredient.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import Modal from '../../../modal/modal';
import IngredientDetails from '../../../ingredient-details/ingredient-details';


const CardBurgerIngredient = (props: any) => {
    const [state, setState] = React.useState({ visible: false });

    const handleCloseModal = (e: any) => {
        setState({ visible: false });
        document.body.style.overflow = 'auto';
    }

    const handleOpenModal = () => {
        setState({ visible: true });
        document.body.style.overflow = 'hidden';
    }

    const modal = <Modal header="Детали ингредиента" close={handleCloseModal}>
        <IngredientDetails title="Бургер" image={props.image_large} name={props.name} price={props.price} key={props._id} calories={props.calories} proteins={props.proteins} fat={props.fat} carbohydrates={props.carbohydrates} />
    </Modal>;

    return (
        <>
            <div style={{ overflow: 'hidden' }} className={`${burgeringredient.cursor_pointer} w-6-12 mb-8`} onClick={handleOpenModal}>
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
            {state.visible && modal}
        </>
    );
}

CardBurgerIngredient.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    proteins: PropTypes.number,
};

export default CardBurgerIngredient;
