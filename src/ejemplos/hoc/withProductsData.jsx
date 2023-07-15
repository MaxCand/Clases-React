import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


// recibe un componente por parámetro
export const withProductsData = (Component) => {
    // crear un nuevo componente y retorna
    // el anterior con funcionalidad agregada
    const WithProductsData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
            pedirDatos()
                .then((res) => setProductos(res))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }, [])

        return <Component productos={productos} loading={loading} {...props}/>
    }

    return WithProductsData
}