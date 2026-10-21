import arrowIcon from '../../assets/icons/arrow-right-white.svg'
import './Button.css'

function Button() {
  return (
    <button className="button" type="button">
      Перейти в каталог
      <img src={arrowIcon} alt="" width="18" height="18" />
    </button>
  )
}

export default Button
