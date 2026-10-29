import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Button from '../../components/Button/Button'
import { categories, products, formatPrice } from '../../data/products'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus-small.svg'
import heartIcon from '../../assets/icons/heart.svg'
import truckIcon from '../../assets/icons/truck.svg'
import styles from './ProductPage.module.css'

function ProductPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className={`container ${styles.empty}`}>
        <h1 className={styles.emptyTitle}>Товар не найден</h1>
        <p className={styles.emptyText}>Возможно, его уже нет в продаже.</p>
        <Button to="/catalog">Перейти в каталог</Button>
      </section>
    )
  }

  const category = categories.find((item) => item.id === product.categoryId)

  return (
    <section className={`container ${styles.page}`}>
      <Breadcrumbs items={[{ title: 'Каталог', to: '/catalog' }, { title: product.title }]} />

      <div className={styles.product}>
        <div className={styles.photo}>
          <img className={styles.image} src={product.image} alt={product.title} />
          {product.badge && <span className={styles.badge}>{product.badge}</span>}
        </div>

        <div className={styles.info}>
          <div className={styles.top}>
            <span className={styles.category}>{category.title.toUpperCase()}</span>
            <span className={styles.stock}>●&nbsp;&nbsp;В наличии</span>
          </div>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.article}>Артикул: TD-00{product.id}</p>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.buy}>
            <div className={styles.count}>
              <button type="button" aria-label="Уменьшить">
                <img src={minusIcon} alt="" width="16" height="16" />
              </button>
              <span>1</span>
              <button type="button" aria-label="Увеличить">
                <img src={plusIcon} alt="" width="16" height="16" />
              </button>
            </div>
            <button className={styles.add} type="button">В корзину</button>
            <button className={styles.favorite} type="button" aria-label="В избранное">
              <img src={heartIcon} alt="" width="21" height="21" />
            </button>
          </div>

          <div className={styles.delivery}>
            <img src={truckIcon} alt="" width="21" height="21" />
            <div>
              <p className={styles.deliveryTitle}>Доставим за 3–5 рабочих дней</p>
              <p className={styles.deliveryText}>От 350 ₽. Бесплатно при заказе от 5 000 ₽.</p>
            </div>
          </div>

          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>Детали и уход</h2>
            <div className={styles.row}>
              <span className={styles.muted}>Материал</span>
              <span>{product.material}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.muted}>Размер</span>
              <span>{product.size}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
