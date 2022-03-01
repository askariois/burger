import React from 'react';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import Modal from '../../../modal/modal';
import IngredientDetails from '../../../ingredient-details/ingredient-details';

import burgeringredient from "../burger-ingredient.module.css";


interface Props {
    _id?: number,
    title: string,
    image: string,
    name: string,
    price: number,
    image_large: string,
    calories: number,
    carbohydrates: number,
    fat: number,
    proteins: number,
};

const CardBurgerIngredient = (props: Props) => {
    const [isModalShown, setIsModalShown] = React.useState(false);

    const handleCloseModal = (e: any) => {
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


export default CardBurgerIngredient;
