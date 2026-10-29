import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../data/products'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import styles from './Products.module.css'

const favoriteIds = ['1', '2', '3', '4']

function Products() {
  const favorites = products.filter((product) => favoriteIds.includes(product.id))

  return (
    <section className={`container ${styles.products}`}>
      <div className={styles.header}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Любимые вещи для дома</h2>
          <p className={styles.text}>Простые формы. Натуральные материалы. Каждый день.</p>
        </div>
        <Link className={styles.link} to="/catalog">
          Смотреть всё
          <img src={arrowIcon} alt="" width="17" height="17" />
        </Link>
      </div>
      <div className={styles.list}>
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products
