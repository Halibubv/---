import { Link } from 'react-router-dom'
import arrowIcon from '../../assets/icons/arrow-right-white.svg'
import './Button.css'

function Button() {
  return (
    <Link className="button" to="/catalog">
      Перейти в каталог
      <img src={arrowIcon} alt="" width="18" height="18" />
    </Link>
  )
}

export default Button
