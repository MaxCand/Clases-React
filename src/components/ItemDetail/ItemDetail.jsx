import { useContext, useState, useMemo } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad
        }
        
        agregarAlCarrito(item)
    }

    
    const handleVolver = () => {
        navigate(-1)
    }

    const fecha = useMemo(() => new Date().toLocaleString(), [cantidad])

    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <h4>{fecha}</h4>

            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>
 
            <h4>Precio: ${precio}</h4>
            <br/>

            <small>categoría: {category}</small>
            <br/>
        
            {
                isInCart(id)
                    ?   <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    :   <ItemCount 
                            max={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
            }

            <hr/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail