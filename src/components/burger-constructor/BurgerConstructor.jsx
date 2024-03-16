import styles from './BurgerConstructor.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor(props) {
    const totalPrice = 610;
    return (
        <div className="constructor-container">
            <div className="locked-element ml-15">
                <ConstructorElement
                    className='ingredient'
                    type='top'
                    isLocked={true}
                    text={props[0].name}
                    price={props[0].price}
                    thumbnail={props[0].image_mobile}
                />
            </div>
            <div className="unlocked-container ml-7">
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[5].name}
                        price={props[5].price}
                        thumbnail={props[5].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[4].name}
                        price={props[4].price}
                        thumbnail={props[4].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[7].name}
                        price={props[7].price}
                        thumbnail={props[7].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[8].name}
                        price={props[8].price}
                        thumbnail={props[8].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[4].name}
                        price={props[4].price}
                        thumbnail={props[4].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[4].name}
                        price={props[4].price}
                        thumbnail={props[4].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[4].name}
                        price={props[4].price}
                        thumbnail={props[4].image_mobile}
                    />
                </div>
                <div className="position-container">
                    <DragIcon></DragIcon>
                    <ConstructorElement
                        className='ingredient'
                        isLocked={false}
                        text={props[8].name}
                        price={props[8].price}
                        thumbnail={props[8].image_mobile}
                    />
                </div>
            </div>
            <div className="constructor-container ml-15">
                <ConstructorElement
                    type='bottom'
                    className='ingredient'
                    isLocked={true}
                    text={props[8].name}
                    price={props[8].price}
                    thumbnail={props[8].image_mobile}
                />
            </div>
            <div className="total-price-container">
                <div className="total-price">
                    <p className='text_type_digits-medium'>{totalPrice}</p>
                    <CurrencyIcon />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large">Оформить заказ</Button>
            </div>
        </div>
    )
}
export default BurgerConstructor