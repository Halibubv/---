import styles from './Subscribe.module.css'

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Письма с теплом</h2>
          <p className={styles.text}>
            Новые коллекции, идеи для дома и немного вдохновения.
            <br />
            Пишем редко и только о хорошем.
          </p>
        </div>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.row}>
            <input className={styles.input} type="email" placeholder="Ваш email" />
            <button className={styles.button} type="submit">Подписаться</button>
          </div>
          <p className={styles.note}>
            Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
