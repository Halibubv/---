import styles from './AdvantageCard.module.css'

function AdvantageCard({ icon, title, text }) {
  return (
    <div className={styles.advantage}>
      <img src={icon} alt="" width="26" height="26" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default AdvantageCard
