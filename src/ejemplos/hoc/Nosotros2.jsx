import { withProductsData } from "./withProductsData"



const Nosotros2 = ({productos, loading, saludo}) => {
    console.log(productos, loading, saludo)
 
    return (
        <div>
            <h2>Nostros 2</h2>
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros2)