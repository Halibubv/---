import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import arrowWhiteIcon from '../../assets/icons/arrow-right-white.svg'
import circleCheckIcon from '../../assets/icons/circle-check.svg'
import lockIcon from '../../assets/icons/lock.svg'
import packageIcon from '../../assets/icons/package-check.svg'
import './CartPage.css'

function CartPage() {
  return (
    <section className="container cart">
      <nav className="breadcrumbs">
        <Link className="breadcrumbs__link" to="/">Главная</Link>
        <img src={chevronRightIcon} alt="" width="12" height="12" />
        <span className="breadcrumbs__current">Корзина</span>
      </nav>

      <div className="cart__header">
        <div className="cart__heading">
          <h1 className="cart__title">Ваша корзина</h1>
          <span className="cart__count">2 товара</span>
        </div>
        <Link className="cart__continue" to="/catalog">
          Продолжить покупки
          <img src={arrowIcon} alt="" width="17" height="17" />
        </Link>
      </div>

      <div className="cart__content">
        <div className="cart__list">
          <div className="cart__labels">
            <span className="cart__label-product">ТОВАР</span>
            <span className="cart__label-count">КОЛИЧЕСТВО</span>
            <span className="cart__label-sum">СУММА</span>
          </div>
          <CartItem />
          <CartItem />

          <form className="cart__promo" onSubmit={(event) => event.preventDefault()}>
            <label className="cart__promo-label" htmlFor="promo">Есть промокод?</label>
            <div className="cart__promo-row">
              <input className="cart__promo-input" id="promo" type="text" placeholder="Введите промокод" />
              <button className="cart__promo-button" type="submit">Применить</button>
            </div>
          </form>
        </div>

        <aside className="cart__summary">
          <h2 className="cart__summary-title">Ваш заказ</h2>
          <div className="cart__row">
            <span className="cart__muted">Товары, 2 шт.</span>
            <span>4 980 ₽</span>
          </div>
          <div className="cart__row">
            <span className="cart__muted">Доставка</span>
            <span className="cart__accent">Бесплатно</span>
          </div>
          <p className="cart__free">
            <img src={circleCheckIcon} alt="" width="16" height="16" />
            Ваш заказ — с бесплатной доставкой
          </p>
          <div className="cart__total">
            <span>Итого</span>
            <span className="cart__total-sum">4 980 ₽</span>
          </div>
          <button className="cart__order" type="button">
            Оформить заказ
            <img src={arrowWhiteIcon} alt="" width="18" height="18" />
          </button>
          <p className="cart__hint">
            Адрес и удобный способ оплаты
            <br />
            вы сможете выбрать на следующем шаге.
          </p>
          <p className="cart__secure">
            <img src={lockIcon} alt="" width="14" height="14" />
            Безопасная оплата
          </p>
        </aside>
      </div>

      <p className="cart__return">
        <img src={packageIcon} alt="" width="20" height="20" />
        Бережно упакуем каждый предмет. Если не подойдёт — верните в течение 14 дней.
      </p>
    </section>
  )
}

export default CartPage
