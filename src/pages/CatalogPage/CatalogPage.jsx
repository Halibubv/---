import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ProductCard from '../../components/ProductCard/ProductCard'
import { categories, products } from '../../data/products'
import searchIcon from '../../assets/icons/search.svg'
import styles from './CatalogPage.module.css'

function CatalogPage() {
  return (
    <section className={`container ${styles.catalog}`}>
      <Breadcrumbs items={[{ title: 'Каталог' }]} />

      <div className={styles.intro}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Для вашего дома</h1>
          <span className={styles.count}>{products.length} товаров</span>
        </div>
        <p className={styles.text}>Вещи, в которых есть тепло. Найдите то, что сделает дом вашим.</p>
      </div>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <img src={searchIcon} alt="" width="20" height="20" />
          <input type="search" placeholder="Найти что-то для дома" />
        </label>
        <select className={styles.sort}>
          <option>По цене: сначала дешевле</option>
          <option>По цене: сначала дороже</option>
        </select>
      </div>

      <div className={styles.categories}>
        <button className={`${styles.category} ${styles.categoryActive}`} type="button">Все товары</button>
        {categories.map((category) => (
          <button className={styles.category} type="button" key={category.id}>
            {category.title}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <p className={styles.end}>Вы посмотрели все {products.length} товаров</p>
    </section>
  )
}

export default CatalogPage
