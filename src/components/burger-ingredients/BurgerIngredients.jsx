import styles from './BurgerIngredients.css'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
    return (
        <div>
            <div className="menu mb-5">
                <div className='menu-buns pr-15 pl-15'>
                    <p className='text_type_main-medium pr-10'>Булки</p>
                </div>
                <div className='menu-sauces pr-15 pl-15'>
                    <p className='text_type_main-medium text_color_inactive pr-10'>Соусы</p>
                </div>
                <div className='menu-fillings pr-15 pl-15'>
                    <p className='text_type_main-medium text_color_inactive'>Начинки</p>
                </div>
            </div>
            <div className="constructor-container">
                <h2 className='text_type_main-medium ml-5'>Булки</h2>
                <div className="buns-container">
                    <div className="cards">
                        <div className="card ml-1 pt-2">
                            <Counter className="counter m" count={1} size="small" />
                            <img src={props[0].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">20</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[0].name}</p>
                        </div>
                        <div className="card ml-10 pt-2">
                            <Counter className="counter" count={0} size="small" />
                            <img src={props[14].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">20</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[14].name}</p>
                        </div>
                    </div>

                </div>
                <h2 className='text_type_main-medium ml-5'>Соусы</h2>
                <div className="sauces-container">
                    <div className="cards">
                        <div className="card ml-1 pt-2">
                            <Counter className="counter m" count={0} size="small" />
                            <img src={props[3].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[3].name}</p>
                        </div>
                        <div className="card ml-10 pt-2">
                            <Counter className="counter" count={0} size="small" />
                            <img src={props[6].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[6].name}</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card ml-1 pt-2">
                            <Counter className="counter m" count={1} size="small" />
                            <img src={props[5].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[5].name}</p>
                        </div>
                        <div className="card ml-10 pt-2">
                            <Counter className="counter" count={0} size="small" />
                            <img src={props[9].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[9].name}</p>
                        </div>
                    </div>
                </div>
                <h2 className='text_type_main-medium ml-5'>Начинки</h2>
                <div className="fillings-container">
                    <div className="cards">
                        <div className="card ml-1 pt-2">
                            <Counter className="counter m" count={1} size="small" />
                            <img src={props[1].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[1].name}</p>
                        </div>
                        <div className="card ml-10 pt-2">
                            <Counter className="counter" count={0} size="small" />
                            <img src={props[2].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[2].name}</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card ml-1 pt-2">
                            <Counter className="counter m" count={1} size="small" />
                            <img src={props[4].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[4].name}</p>
                        </div>
                        <div className="card ml-10 pt-2">
                            <Counter className="counter" count={0} size="small" />
                            <img src={props[7].image} alt="" />
                            <div className="price-container">
                                <p className="price text_type_digits-default">30</p>
                                <CurrencyIcon></CurrencyIcon>
                            </div>
                            <p className="bun-name text_type_main-small m-1">{props[7].name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerConstructor