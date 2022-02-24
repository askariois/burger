import React from 'react';
import burger from '../../../images/burger.svg'
import {Counter, CurrencyIcon, LockIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerconstrucor from  "./burgerin-construcor.module.css";
import Checkout from "./Checkout/Checkout";



function BurgerConstructor() {
    return (
        <div className={`${burgerconstrucor.content_width} mt-25`}>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                <div className={`${burgerconstrucor.burger_name} mr-5`}>
                    Краторная булка N-200i
                </div>
                <div className={`flex justify-center align-center mr-5`}>
                    <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                    <CurrencyIcon type="primary" />
                </div>
                <LockIcon type="secondary" />
            </div>
            <div className={`relative flex justify-between align-center pt-4 pb-4 pl-6 pr-6 mb-4 ${burgerconstrucor.bg_card}`}>
                 <img src={burger} alt='Грустная собачка' className={`mr-5`} />
                 <div className={`${burgerconstrucor.burger_name} mr-5`}>
                     Краторная булка N-200i
                 </div>
                 <div className={`flex justify-center align-center mr-5`}>
                     <span className={`${burgerconstrucor.burger_counter} mr-1`}>20</span>
                     <CurrencyIcon type="primary" />
                 </div>
                 <LockIcon type="secondary" />
             </div>
            <Checkout/>
        </div>
    );
}

export default BurgerConstructor;
