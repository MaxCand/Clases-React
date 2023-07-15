import { Link } from "react-router-dom"


// const ItemCard = ({item}) => {
const ItemCard = ({id, stock, nombre, precio, descripcion, img}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>
            {stock <= 10 && <p style={{fontWeight: 700, color: 'red'}}>Quedan sólo {stock} unidades!</p>}

            <p>Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard