import ItemCard from "../../components/ItemCard/ItemCard"
import { ProductsData } from "./ProductsData"



const ItemList3 = () => {

    return (
        <div className="container my-5">
            <h2>Item List 3</h2>
            <hr/>

            <div className="row">
                <ProductsData>
                    {(productos, loading) => (
                        loading
                            ? <h2>Cargando...</h2>
                            : productos.map(prod => <ItemCard key={prod.id} {...prod}/>)
                    )}
                </ProductsData>
            </div>
            
        </div>
    )
}

export default ItemList3