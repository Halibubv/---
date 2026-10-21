import Button from '../Button/Button'
import bannerImage from '../../assets/images/banner.jpg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.label}>ДЛЯ ДОМА. ДЛЯ СЕБЯ.</p>
          <h1 className={styles.title}>
            Меньше суеты.
            <br />
            Больше дома.
          </h1>
          <p className={styles.text}>
            Тактильные ткани, любимая керамика и мягкий свет. Вещи, с которыми хорошо быть дома.
          </p>
          <Button />
        </div>
        <img className={styles.image} src={bannerImage} alt="Уютный интерьер" />
      </div>
    </section>
  )
}

export default Hero
