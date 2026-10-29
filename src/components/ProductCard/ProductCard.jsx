import { Link } from 'react-router-dom'
import { formatPrice } from '../../data/products'
import heartIcon from '../../assets/icons/heart.svg'
import plusIcon from '../../assets/icons/plus.svg'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  return (
    <article className={styles.productCard}>
      <Link className={styles.photo} to={`/product/${product.id}`}>
        <img className={styles.image} src={product.image} alt={product.title} />
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
      </Link>
      <button className={styles.favorite} type="button" aria-label="В избранное">
        <img src={heartIcon} alt="" width="19" height="19" />
      </button>
      <div className={styles.info}>
        <Link className={styles.title} to={`/product/${product.id}`}>{product.title}</Link>
        <p className={styles.subtitle}>{product.subtitle}</p>
        <div className={styles.bottom}>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <button className={styles.add} type="button" aria-label="Добавить в корзину">
            <img src={plusIcon} alt="" width="17" height="17" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
