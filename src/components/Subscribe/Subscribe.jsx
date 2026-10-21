import './Subscribe.css'

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container subscribe__inner">
        <div className="subscribe__intro">
          <h2 className="subscribe__title">Письма с теплом</h2>
          <p className="subscribe__text">
            Новые коллекции, идеи для дома и немного вдохновения.
            <br />
            Пишем редко и только о хорошем.
          </p>
        </div>
        <form className="subscribe__form" onSubmit={(event) => event.preventDefault()}>
          <div className="subscribe__row">
            <input className="subscribe__input" type="email" placeholder="Ваш email" />
            <button className="subscribe__button" type="submit">Подписаться</button>
          </div>
          <p className="subscribe__note">
            Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
