import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import CartNav from './components/CartNav/CartNav'
import DeliveryAvailability from './components/DeliveryAvailability/DeliveryAvailability'
import HeaderBar from './components/HeaderBar/HeaderBar'
import OrderSummary from './components/OrderSummary/OrderSummary'

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <CartNav />
      <Banner />
      <Cart />
      <DeliveryAvailability />
      <OrderSummary />
    </div>
  )
}

export default App
