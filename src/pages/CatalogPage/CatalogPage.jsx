import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'
import searchIcon from '../../assets/icons/search.svg'
import './CatalogPage.css'

function CatalogPage() {
  return (
    <section className="container catalog">
      <nav className="breadcrumbs">
        <Link className="breadcrumbs__link" to="/">Главная</Link>
        <img src={chevronRightIcon} alt="" width="12" height="12" />
        <span className="breadcrumbs__current">Каталог</span>
      </nav>

      <div className="catalog__intro">
        <div className="catalog__heading">
          <h1 className="catalog__title">Для вашего дома</h1>
          <span className="catalog__count">8 товаров</span>
        </div>
        <p className="catalog__text">Вещи, в которых есть тепло. Найдите то, что сделает дом вашим.</p>
      </div>

      <div className="catalog__toolbar">
        <label className="catalog__search">
          <img src={searchIcon} alt="" width="20" height="20" />
          <input type="search" placeholder="Найти что-то для дома" />
        </label>
        <select className="catalog__sort">
          <option>По цене: сначала дешевле</option>
          <option>По цене: сначала дороже</option>
        </select>
      </div>

      <div className="catalog__categories">
        <button className="catalog__category catalog__category--active" type="button">Все товары</button>
        <button className="catalog__category" type="button">Декор</button>
        <button className="catalog__category" type="button">Текстиль</button>
        <button className="catalog__category" type="button">Посуда</button>
        <button className="catalog__category" type="button">Освещение</button>
        <button className="catalog__category" type="button">Хранение</button>
      </div>

      <div className="catalog__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <p className="catalog__end">Вы посмотрели все 8 товаров</p>
    </section>
  )
}

export default CatalogPage
