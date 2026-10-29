import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import truckIcon from '../../assets/icons/truck.svg'
import styles from './Header.module.css'

function getLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link
}

function Header() {
  return (
    <header className="header">
      <div className={styles.delivery}>Бесплатная доставка заказов от 5 000 ₽</div>
      <div className={styles.navWrap}>
        <div className={`container ${styles.nav}`}>
          <div className={styles.brand}>
            <Logo />
          </div>
          <nav className={styles.menu}>
            <NavLink className={getLinkClass} to="/" end>Главная</NavLink>
            <NavLink className={getLinkClass} to="/catalog">Каталог</NavLink>
            <NavLink className={getLinkClass} to="/cart">
              Корзина
              <span className={styles.count}>2</span>
            </NavLink>
          </nav>
          <p className={styles.contact}>
            <img src={truckIcon} alt="" width="18" height="18" />
            Доставка и оплата
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
