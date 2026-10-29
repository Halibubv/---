import { Link } from 'react-router-dom'
import houseIcon from '../../assets/icons/house.svg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <img src={houseIcon} alt="" width="30" height="30" />
      <span className={styles.text}>тихий дом</span>
    </Link>
  )
}

export default Logo
