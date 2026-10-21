import leafIcon from '../../assets/icons/leaf.svg'
import styles from './AdvantageCard.module.css'

function AdvantageCard() {
  return (
    <div className={styles.advantage}>
      <img src={leafIcon} alt="" width="26" height="26" />
      <div className={styles.info}>
        <h3 className={styles.title}>Ближе к природе</h3>
        <p className={styles.text}>Натуральные материалы и спокойные цвета</p>
      </div>
    </div>
  )
}

export default AdvantageCard
