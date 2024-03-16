import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../app-header/AppHeader.css'


function AppHeader() {

    return (
        <div className='header-container'>
            <nav>
                <div className="constuctor-container m-10">
                    <BurgerIcon></BurgerIcon>
                    <p className='text_type_main-small'>Конструктор</p>
                </div>
                <div className="orders-container mr-30">
                    <ListIcon type="secondary"></ListIcon>
                    <p className='text_type_main-small text_color_inactive'>Лента заказов</p>
                </div>
            </nav>
            <Logo className='burger-logo'></Logo>
            <div className="profile-container  pl-30 ml-30 mr-20">
                <ProfileIcon type="secondary"></ProfileIcon>
                <p className='text_type_main-small text_color_inactive'>Личный кабинет</p>
            </div>
        </div>
    )
}

export default AppHeader