import Button from '../Button/Button'
import bannerImage from '../../assets/images/banner.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="container hero">
      <div className="hero__banner">
        <div className="hero__content">
          <p className="hero__label">ДЛЯ ДОМА. ДЛЯ СЕБЯ.</p>
          <h1 className="hero__title">
            Меньше суеты.
            <br />
            Больше дома.
          </h1>
          <p className="hero__text">
            Тактильные ткани, любимая керамика и мягкий свет. Вещи, с которыми хорошо быть дома.
          </p>
          <Button />
        </div>
        <img className="hero__image" src={bannerImage} alt="Уютный интерьер" />
      </div>
    </section>
  )
}

export default Hero
