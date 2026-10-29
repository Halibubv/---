import { Link } from 'react-router-dom'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'
import styles from './Breadcrumbs.module.css'

function Breadcrumbs({ items }) {
  return (
    <nav className={styles.breadcrumbs}>
      <Link className={styles.link} to="/">Главная</Link>
      {items.map((item) => (
        <span className={styles.item} key={item.title}>
          <img src={chevronRightIcon} alt="" width="12" height="12" />
          {item.to ? (
            <Link className={styles.link} to={item.to}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs
