import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import truckIcon from '../../assets/icons/truck.svg'
import './Header.css'

function getLinkClass({ isActive }) {
  return isActive ? 'header__link header__link--active' : 'header__link'
}

function Header() {
  return (
    <header className="header">
      <div className="header__delivery">Бесплатная доставка заказов от 5 000 ₽</div>
      <div className="header__nav-wrap">
        <div className="container header__nav">
          <div className="header__brand">
            <Logo />
          </div>
          <nav className="header__menu">
            <NavLink className={getLinkClass} to="/" end>Главная</NavLink>
            <NavLink className={getLinkClass} to="/catalog">Каталог</NavLink>
            <NavLink className={getLinkClass} to="/cart">
              Корзина
              <span className="header__count">2</span>
            </NavLink>
          </nav>
          <p className="header__contact">
            <img src={truckIcon} alt="" width="18" height="18" />
            Доставка и оплата
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
