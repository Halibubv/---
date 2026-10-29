import Button from '../../components/Button/Button'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <section className={`container ${styles.notFound}`}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Такой страницы нет</h1>
      <p className={styles.text}>Возможно, она переехала или вы ошиблись в адресе.</p>
      <Button to="/">На главную</Button>
    </section>
  )
}

export default NotFoundPage
