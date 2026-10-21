import arrowIcon from '../../assets/icons/arrow-right-white.svg'
import styles from './Button.module.css'

function Button() {
  return (
    <button className={styles.button} type="button">
      Перейти в каталог
      <img src={arrowIcon} alt="" width="18" height="18" />
    </button>
  )
}

export default Button
