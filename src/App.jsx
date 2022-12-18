import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import CartNav from './components/CartNav/CartNav'
import Footer from './components/Footer/Footer'
import HeaderBar from './components/HeaderBar/HeaderBar'

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <CartNav />
      <Banner />
      <Cart />
      <Footer />
    </div>
  )
}

export default App
