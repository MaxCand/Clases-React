import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <Link className="btn btn-primary" to="/">Ir a la tienda</Link>
            </div>
        )
    }
   

    return (
        <div className="container my-5">

            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>

                        <button 
                            className="btn btn-danger"
                            onClick={() => eliminarDelCarrito(prod.id)}
                        >
                            <FaTrashAlt/>
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h5>Total: ${totalCompra()}</h5>
                <hr/>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart