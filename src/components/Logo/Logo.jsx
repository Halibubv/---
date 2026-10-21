import houseIcon from '../../assets/icons/house.svg'
import './Logo.css'

function Logo() {
  return (
    <a className="logo" href="#">
      <img src={houseIcon} alt="" width="30" height="30" />
      <span className="logo__text">тихий дом</span>
    </a>
  )
}

export default Logo
