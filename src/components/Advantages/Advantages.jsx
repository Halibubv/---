import AdvantageCard from '../AdvantageCard/AdvantageCard'
import leafIcon from '../../assets/icons/leaf.svg'
import packageIcon from '../../assets/icons/package-check.svg'
import heartHandshakeIcon from '../../assets/icons/heart-handshake.svg'
import styles from './Advantages.module.css'

function Advantages() {
  return (
    <section className="container">
      <div className={styles.advantages}>
        <AdvantageCard
          icon={leafIcon}
          title="Ближе к природе"
          text="Натуральные материалы и спокойные цвета"
        />
        <AdvantageCard
          icon={packageIcon}
          title="Бережно доставим"
          text="По всей России, бесплатно от 5 000 ₽"
        />
        <AdvantageCard
          icon={heartHandshakeIcon}
          title="Выбрано с заботой"
          text="Предметы, которые останутся надолго"
        />
      </div>
    </section>
  )
}

export default Advantages
