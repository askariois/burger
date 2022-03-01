import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import Checkout from './checkout/checkout';

import burgerconstrucor from "./burgerin-construcor.module.css";

interface ClickableProps {
    card: {}[];
}

function BurgerConstructor(props: ClickableProps) {
    return (
        <div className={`${burgerconstrucor.content_width} mt-25  mr-2`}>
            <div className='flex align-end  flex-col'>
                {props.card.map((item: any, index: any) => {
                    if (item.type === 'bun' && item.name === 'Флюоресцентная булка R2-D3') {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}> <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${item.name} (верх)`}
                                price={item.price}
                                thumbnail={item.image}
                            /></div>
                        );
                    }
                })}
                <div className={`${burgerconstrucor.scroll}`}>
                    {props.card.map((item: any, index: any) => {
                        if (item.type !== 'bun') {
                            return (
                                <div className='mt-4 mb-4 flex align-center' key={item._id}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    /></div>
                            );
                        }
                    })}
                </div>
                {props.card.map((item: any, index: any) => {
                    if (item.type === 'bun' && item.name === 'Флюоресцентная булка R2-D3') {
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
                    }
                })}
            </div>
            <Checkout />
        </div>
    );
}



export default BurgerConstructor;
