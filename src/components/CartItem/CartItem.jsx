import { Link } from 'react-router-dom'
import { formatPrice } from '../../data/products'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus-small.svg'
import closeIcon from '../../assets/icons/close.svg'
import styles from './CartItem.module.css'

function CartItem({ product, count }) {
  return (
    <div className={styles.cartItem}>
      <Link to={`/product/${product.id}`}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </Link>
      <div className={styles.info}>
        <Link className={styles.title} to={`/product/${product.id}`}>{product.title}</Link>
        <p className={styles.text}>{product.subtitle}</p>
        <p className={styles.text}>{formatPrice(product.price)} / шт.</p>
      </div>
      <div className={styles.count}>
        <button type="button" aria-label="Уменьшить">
          <img src={minusIcon} alt="" width="16" height="16" />
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Увеличить">
          <img src={plusIcon} alt="" width="16" height="16" />
        </button>
      </div>
      <p className={styles.sum}>{formatPrice(product.price * count)}</p>
      <button className={styles.remove} type="button" aria-label="Удалить">
        <img src={closeIcon} alt="" width="16" height="16" />
      </button>
    </div>
  )
}

export default CartItem
