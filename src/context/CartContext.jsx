import { useState, createContext, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }

    // const modificarCantidad = (id) => {
    //     const newCart = cart.slice()
    //     const item = newCart.find(i => i.id === id)
    //     // item.cantidad--
    //     // item.cantidad++
    //     setCart(newCart)
    // }

    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}