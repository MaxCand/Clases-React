import { withProductsData } from "./withProductsData"




const ItemList2 = ({productos, loading}) => {
    console.log(productos, loading)

    return (
        <div className="container my-5">
            <h2>ItemList 2</h2>
            <hr/>

            
        </div>
    )
}

export default withProductsData(ItemList2)