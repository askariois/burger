import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import burger from '../../../images/burger.svg'
import burgerconstrucor from  "./burgerin-construcor.module.css";
import Checkout from './checkout/checkout';



function BurgerConstructor() {
    return (
        <div className={`${burgerconstrucor.content_width} mt-25  mr-2`}>
            <div className='flex align-end  flex-col'>
                <div className='mb-2 mr-2'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={burger}
                />
                </div>
                <div className={`${burgerconstrucor.scroll}`}>
                    <div className='mt-4 mb-4'>
                        <ConstructorElement 
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={burger}
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burger}
                    />
                    </div>
                    <div className='mt-4 mb-4'>
                                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burger}
                    />
                    </div>
                    <div className='mt-4 mb-4'>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burger}
                    />
                    </div>
                    <div className='mt-4 mb-4'>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={burger}
                    />
                    </div>
                </div>
                <div className='mt-2  mr-2'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={burger}
                />
                </div>
             </div>
            <Checkout/>
        </div>
    );
}

export default BurgerConstructor;
