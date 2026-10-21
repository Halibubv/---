import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Advantages from './components/Advantages/Advantages'
import Products from './components/Products/Products'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Products />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}

export default App
