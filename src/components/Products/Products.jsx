import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import './Products.css'

function Products() {
  return (
    <section className="container products">
      <div className="products__header">
        <div className="products__intro">
          <h2 className="products__title">Любимые вещи для дома</h2>
          <p className="products__text">Простые формы. Натуральные материалы. Каждый день.</p>
        </div>
        <Link className="products__link" to="/catalog">
          Смотреть всё
          <img src={arrowIcon} alt="" width="17" height="17" />
        </Link>
      </div>
      <div className="products__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default Products
