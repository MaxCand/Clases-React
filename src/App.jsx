
import { CartProvider } from "./context/CartContext"
import { AuthContextProvider } from "./context/AuthContext"
import AppRouter from "./router/AppRouter"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  )
}

export default App
