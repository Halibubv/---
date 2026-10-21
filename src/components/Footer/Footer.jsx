import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <Logo />
            <p className="footer__text">
              Нужные вещи для простых радостей.
              <br />
              С теплом к вашему дому.
            </p>
          </div>
          <nav className="footer__column footer__column--shop">
            <h3 className="footer__title">Магазин</h3>
            <Link to="/">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/cart">Корзина</Link>
          </nav>
          <div className="footer__column footer__column--help">
            <h3 className="footer__title">Покупателям</h3>
            <p>Доставка и оплата</p>
            <p>Обмен и возврат</p>
            <p>Уход за изделиями</p>
          </div>
          <div className="footer__column footer__column--contacts">
            <h3 className="footer__title">Мы рядом</h3>
            <a className="footer__accent" href="mailto:hello@tihiydom.ru">hello@tihiydom.ru</a>
            <p>Ежедневно, 10:00–19:00</p>
            <p className="footer__accent">ВКонтакте&nbsp;&nbsp;·&nbsp;&nbsp;Telegram</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Тихий дом</p>
          <p>Политика конфиденциальности</p>
          <p>Дом начинается с деталей</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
