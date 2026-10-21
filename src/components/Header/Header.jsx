import Logo from '../Logo/Logo'
import truckIcon from '../../assets/icons/truck.svg'
import styles from './Header.module.css'

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
            <a className={`${styles.link} ${styles.linkActive}`} href="#">Главная</a>
            <a className={styles.link} href="#">Каталог</a>
            <a className={styles.link} href="#">
              Корзина
              <span className={styles.count}>2</span>
            </a>
          </nav>
          <a className={styles.contact} href="#">
            <img src={truckIcon} alt="" width="18" height="18" />
            Доставка и оплата
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
