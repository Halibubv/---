import { Link } from 'react-router-dom'
import houseIcon from '../../assets/icons/house.svg'
import './Logo.css'

function Logo() {
  return (
    <Link className="logo" to="/">
      <img src={houseIcon} alt="" width="30" height="30" />
      <span className="logo__text">тихий дом</span>
    </Link>
  )
}

export default Logo
