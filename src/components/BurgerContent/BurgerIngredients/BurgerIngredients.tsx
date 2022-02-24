import React from 'react';
import TabsBurgerIngredients from "./TabsBurgerIngredients/TabsBurgerIngredients";
import dogImagePath from '../../../images/illustration.svg'
import {Counter,CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import burgeringredient from  "./burgeringredient.module.css";



function BurgerIngredients() {
    return (
        <div className={`w-6-12`}>
            <TabsBurgerIngredients/>

            <div>
                <div className={`${burgeringredient.content_width} mt-10`}>
                    <h2>Булки</h2>
                    <div className={`flex flex-wrap`}>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${burgeringredient.content_width} mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${burgeringredient.content_width} mt-10`}>
                    <h2>Начинка</h2>
                    <div className={`flex flex-wrap`}>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                        <div className={`w-6-12 mb-8`}>
                            <div className={`relative flex justify-center`}>
                                <img src={dogImagePath} alt='Грустная собачка' />
                                <Counter count={2} size="default" />
                            </div>
                            <div className={`flex justify-center align-center`}>
                                <span className={`${burgeringredient.burger_counter} mt-1`}>20</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <div className={`${burgeringredient.burger_name} mt-1`}>
                                Краторная булка N-200i
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerIngredients;
