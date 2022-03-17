import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import OrderDetails from '../../order-details/order-details';
import { useDrop } from "react-dnd";


import burgerconstrucor from './burger-construcor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_BURGER_CONSTRUCTOR, DELETE_BURGER_CONSTRUCTOR } from '../../../services/actions/constructor-ingredients';

function BurgerConstructor() {


    const { contructor } = useSelector(state => state.constructor);
    console.log(contructor);

    // const bunTopBottom = ingredients.filter((item) => {
    //     return item.type === 'bun' && item.name === 'Флюоресцентная булка R2-D3';
    // });

    // const ingredientsMiddle = ingredients.filter((item) => {
    //     return item.type !== 'bun';
    // });
    const dispatch = useDispatch();

    // const movePostponedItem = (item) =>{
    //     dispatch({
    //       type: ADD_ITEM,
    //       ...item
    //     });
    //     dispatch({
    //       type: DELETE_POSTPONED_ITEM,
    //       ...item
    //     })
    // }

    const moveItem = (item) =>{
        console.log(item);
        dispatch({
          type: ADD_BURGER_CONSTRUCTOR,
          ...item
        });
    }


    const [, dropTarget] = useDrop({
        accept: "ingredients",
        drop(itemId) {
            moveItem(itemId)
        }
    });


    return (
        <div className={`${burgerconstrucor.content_width} mt-25  mr-2`}  ref={dropTarget}>
            <div className='flex align-end  flex-col' >
               {/* {contructor.map((item) => {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}> <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${item.name} (верх)`}
                                price={item.price}
                                thumbnail={item.image}
                            /></div>
                        );
                })} */}

                {/*  <div className={`${burgerconstrucor.scroll}`}>
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
                })} */}
            </div>
                    {/* <OrderDetails /> */}
        </div>
    );
}

// BurgerConstructor.propTypes = {
//     ingredients : PropTypes.arrayOf(PropTypes.object.isRequired),
// };

export default BurgerConstructor;
