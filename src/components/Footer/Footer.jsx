import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.about}>
            <Logo />
            <p className={styles.text}>
              Нужные вещи для простых радостей.
              <br />
              С теплом к вашему дому.
            </p>
          </div>
          <nav className={`${styles.column} ${styles.columnShop}`}>
            <h3 className={styles.title}>Магазин</h3>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/cart">Корзина</Link>
          </nav>
          <div className={`${styles.column} ${styles.columnHelp}`}>
            <h3 className={styles.title}>Покупателям</h3>
            <p>Доставка и оплата</p>
            <p>Обмен и возврат</p>
            <p>Уход за изделиями</p>
          </div>
          <div className={`${styles.column} ${styles.columnContacts}`}>
            <h3 className={styles.title}>Мы рядом</h3>
            <a className={styles.accent} href="mailto:hello@tihiydom.ru">hello@tihiydom.ru</a>
            <p>Ежедневно, 10:00–19:00</p>
            <p className={styles.accent}>ВКонтакте&nbsp;&nbsp;·&nbsp;&nbsp;Telegram</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Тихий дом</p>
          <p>Политика конфиденциальности</p>
          <p>Дом начинается с деталей</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
