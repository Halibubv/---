import Logo from '../Logo/Logo'
import truckIcon from '../../assets/icons/truck.svg'
import './Header.css'

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
            <a className="header__link header__link--active" href="#">Главная</a>
            <a className="header__link" href="#">Каталог</a>
            <a className="header__link" href="#">
              Корзина
              <span className="header__count">2</span>
            </a>
          </nav>
          <a className="header__contact" href="#">
            <img src={truckIcon} alt="" width="18" height="18" />
            Доставка и оплата
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
