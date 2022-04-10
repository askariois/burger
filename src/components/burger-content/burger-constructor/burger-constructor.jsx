import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import OrderDetails from '../../order-details/order-details';
import {IngredientContext} from '../../../services/constructorContext';

import burgerconstrucor from './burger-construcor.module.css';





function BurgerConstructor() {

    const ingredients = React.useContext(IngredientContext);


    const bunTopBottom = ingredients.filter((item) => {
        return item.type === 'bun' && item.name === 'Флюоресцентная булка R2-D3';
    });

    const ingredientsMiddle = ingredients.filter((item) => {
        return item.type !== 'bun';
    });

    return (
        <div className={`${burgerconstrucor.content_width} mt-25  mr-2`}>
            <div className='flex align-end  flex-col'>
                {bunTopBottom.map((item) => {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}> <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${item.name} (верх)`}
                                price={item.price}
                                thumbnail={item.image}
                            /></div>
                        );
                })}
                <div className={`${burgerconstrucor.scroll}`}>
                    {ingredientsMiddle.map((item) => {
                            return (
                                <div className='mt-4 mb-4 flex align-center' key={item._id}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                    </div>
                            );
                    })}
                </div>
                {bunTopBottom.map((item) => {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`}
                                key={item._id}> <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${item.name} (низ)`}
                                    price={item.price}
                                    thumbnail={item.image}
                                /></div>
                        );
                })}
            </div>
                    <OrderDetails bun = {bunTopBottom} ingredients={ingredientsMiddle}/>
    
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients : PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default BurgerConstructor;
