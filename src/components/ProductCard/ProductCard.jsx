import vaseImage from '../../assets/images/vase.jpg'
import heartIcon from '../../assets/icons/heart.svg'
import plusIcon from '../../assets/icons/plus.svg'
import styles from './ProductCard.module.css'

function ProductCard() {
  return (
    <article className={styles.productCard}>
      <div className={styles.photo}>
        <img className={styles.image} src={vaseImage} alt="Ваза «Тишина»" />
        <span className={styles.badge}>Бестселлер</span>
        <button className={styles.favorite} type="button" aria-label="В избранное">
          <img src={heartIcon} alt="" width="19" height="19" />
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Ваза «Тишина»</h3>
        <p className={styles.subtitle}>Керамика · песочный</p>
        <div className={styles.bottom}>
          <p className={styles.price}>2 490 ₽</p>
          <button className={styles.add} type="button" aria-label="Добавить в корзину">
            <img src={plusIcon} alt="" width="17" height="17" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
