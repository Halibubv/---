import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="container not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Такой страницы нет</h1>
      <p className="not-found__text">Возможно, она переехала или вы ошиблись в адресе.</p>
      <Link className="button" to="/">На главную</Link>
    </section>
  )
}

export default NotFoundPage
