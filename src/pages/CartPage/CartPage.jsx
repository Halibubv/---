import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { products, formatPrice } from '../../data/products'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import arrowWhiteIcon from '../../assets/icons/arrow-right-white.svg'
import circleCheckIcon from '../../assets/icons/circle-check.svg'
import lockIcon from '../../assets/icons/lock.svg'
import packageIcon from '../../assets/icons/package-check.svg'
import styles from './CartPage.module.css'

const cartItems = [
  { productId: '1', count: 1 },
  { productId: '2', count: 1 },
]

function CartPage() {
  const items = cartItems.map((item) => ({
    product: products.find((product) => product.id === item.productId),
    count: item.count,
  }))
  const total = items.reduce((sum, item) => sum + item.product.price * item.count, 0)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <section className={`container ${styles.cart}`}>
      <Breadcrumbs items={[{ title: 'Корзина' }]} />

      <div className={styles.header}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Ваша корзина</h1>
          <span className={styles.count}>{totalCount} товара</span>
        </div>
        <Link className={styles.continue} to="/catalog">
          Продолжить покупки
          <img src={arrowIcon} alt="" width="17" height="17" />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.labels}>
            <span className={styles.labelProduct}>ТОВАР</span>
            <span className={styles.labelCount}>КОЛИЧЕСТВО</span>
            <span className={styles.labelSum}>СУММА</span>
          </div>
          {items.map((item) => (
            <CartItem key={item.product.id} product={item.product} count={item.count} />
          ))}

          <form className={styles.promo} onSubmit={(event) => event.preventDefault()}>
            <label className={styles.promoLabel} htmlFor="promo">Есть промокод?</label>
            <div className={styles.promoRow}>
              <input className={styles.promoInput} id="promo" type="text" placeholder="Введите промокод" />
              <button className={styles.promoButton} type="submit">Применить</button>
            </div>
          </form>
        </div>

        <aside className={styles.summary}>
          <h2 className={styles.summaryTitle}>Ваш заказ</h2>
          <div className={styles.row}>
            <span className={styles.muted}>Товары, {totalCount} шт.</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.muted}>Доставка</span>
            <span className={styles.accent}>Бесплатно</span>
          </div>
          <p className={styles.free}>
            <img src={circleCheckIcon} alt="" width="16" height="16" />
            Ваш заказ — с бесплатной доставкой
          </p>
          <div className={styles.total}>
            <span>Итого</span>
            <span className={styles.totalSum}>{formatPrice(total)}</span>
          </div>
          <button className={styles.order} type="button">
            Оформить заказ
            <img src={arrowWhiteIcon} alt="" width="18" height="18" />
          </button>
          <p className={styles.hint}>
            Адрес и удобный способ оплаты
            <br />
            вы сможете выбрать на следующем шаге.
          </p>
          <p className={styles.secure}>
            <img src={lockIcon} alt="" width="14" height="14" />
            Безопасная оплата
          </p>
        </aside>
      </div>

      <p className={styles.return}>
        <img src={packageIcon} alt="" width="20" height="20" />
        Бережно упакуем каждый предмет. Если не подойдёт — верните в течение 14 дней.
      </p>
    </section>
  )
}

export default CartPage
