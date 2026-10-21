import vaseImage from '../../assets/images/vase.jpg'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus-small.svg'
import closeIcon from '../../assets/icons/close.svg'
import './CartItem.css'

function CartItem() {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={vaseImage} alt="Ваза «Тишина»" />
      <div className="cart-item__info">
        <h3 className="cart-item__title">Ваза «Тишина»</h3>
        <p className="cart-item__text">Керамика · песочный</p>
        <p className="cart-item__text">2 490 ₽ / шт.</p>
      </div>
      <div className="cart-item__count">
        <button type="button" aria-label="Уменьшить">
          <img src={minusIcon} alt="" width="16" height="16" />
        </button>
        <span>1</span>
        <button type="button" aria-label="Увеличить">
          <img src={plusIcon} alt="" width="16" height="16" />
        </button>
      </div>
      <p className="cart-item__sum">2 490 ₽</p>
      <button className="cart-item__remove" type="button" aria-label="Удалить">
        <img src={closeIcon} alt="" width="16" height="16" />
      </button>
    </div>
  )
}

export default CartItem
