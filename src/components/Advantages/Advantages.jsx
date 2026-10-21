import AdvantageCard from '../AdvantageCard/AdvantageCard'
import styles from './Advantages.module.css'

function Advantages() {
  return (
    <section className="container">
      <div className={styles.advantages}>
        <AdvantageCard />
        <AdvantageCard />
        <AdvantageCard />
      </div>
    </section>
  )
}

export default Advantages
