import houseIcon from '../../assets/icons/house.svg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <a className={styles.logo} href="#">
      <img src={houseIcon} alt="" width="30" height="30" />
      <span className={styles.text}>тихий дом</span>
    </a>
  )
}

export default Logo
