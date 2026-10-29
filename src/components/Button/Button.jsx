import { Link } from 'react-router-dom'
import arrowIcon from '../../assets/icons/arrow-right-white.svg'
import styles from './Button.module.css'

function Button({ to, children }) {
  return (
    <Link className={styles.button} to={to}>
      {children}
      <img src={arrowIcon} alt="" width="18" height="18" />
    </Link>
  )
}

export default Button
