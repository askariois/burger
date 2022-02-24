import React from 'react';
import burgeringredient from  "./burgeringredient.module.css";
import TabsBurgerIngredients from './tabs-burger-ingredients/tabs-burger-ingredients';
import CardBurgerIngredient from './card-burger-ingredient/card-burger-ingredients';



function BurgerIngredients(props:any) {
    return (
        <div className={`${burgeringredient.content_width}`}>
            <TabsBurgerIngredients/>
            <div className={`${burgeringredient.scroll}`}>
                <div className={`mt-10`}>
                <h2>Бургеры</h2>
                <div className={`flex flex-wrap`}>
                    {props.card.map((item:any , index:any) =>{
                        if(item.type === 'bun'){                  
                            return <CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={index}/>;
                        }   
                    })}
                </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                        {props.card.map((item:any , index:any) =>{
                            if(item.type === 'sauce'){                  
                                return <CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={index}/>;
                            }   
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Начинки</h2>
                    <div className={`flex flex-wrap`}>
                        {props.card.map((item:any , index:any) =>{
                            if(item.type === 'main'){                  
                                return <CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={index}/>;
                            }   
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerIngredients;
