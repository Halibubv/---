import vaseImage from '../../assets/images/vase.jpg'
import heartIcon from '../../assets/icons/heart.svg'
import plusIcon from '../../assets/icons/plus.svg'
import './ProductCard.css'

function ProductCard() {
  return (
    <article className="product-card">
      <div className="product-card__photo">
        <img className="product-card__image" src={vaseImage} alt="Ваза «Тишина»" />
        <span className="product-card__badge">Бестселлер</span>
        <button className="product-card__favorite" type="button" aria-label="В избранное">
          <img src={heartIcon} alt="" width="19" height="19" />
        </button>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">Ваза «Тишина»</h3>
        <p className="product-card__subtitle">Керамика · песочный</p>
        <div className="product-card__bottom">
          <p className="product-card__price">2 490 ₽</p>
          <button className="product-card__add" type="button" aria-label="Добавить в корзину">
            <img src={plusIcon} alt="" width="17" height="17" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
