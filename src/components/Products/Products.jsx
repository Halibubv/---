import ProductCard from '../ProductCard/ProductCard'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import styles from './Products.module.css'

function Products() {
  return (
    <section className={`container ${styles.products}`}>
      <div className={styles.header}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Любимые вещи для дома</h2>
          <p className={styles.text}>Простые формы. Натуральные материалы. Каждый день.</p>
        </div>
        <a className={styles.link} href="#">
          Смотреть всё
          <img src={arrowIcon} alt="" width="17" height="17" />
        </a>
      </div>
      <div className={styles.list}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default Products
