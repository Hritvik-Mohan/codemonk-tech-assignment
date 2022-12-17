import './App.css'
import Banner from './components/Banner/Banner'
import CartNav from './components/CartNav/CartNav'
import HeaderBar from './components/HeaderBar/HeaderBar'

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <CartNav />
      <Banner />
    </div>
  )
}

export default App
