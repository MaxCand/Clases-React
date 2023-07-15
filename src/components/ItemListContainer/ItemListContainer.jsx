import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar una referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        // 2.- peticion de esa referencia (async)
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

                        
    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer

// const promesa = new Promise((resolve, reject) => {
//     // cuerpo promesa
//     setTimeout(() => {
//         // resolve("Promesa resuelta")
//         reject("Promesa rechazada")
//     }, 5000)
// })

// promesa
//     .then(() => {
//         console.log("Hola mundo")
//     })
//     .catch(() => {
//         console.log("Chau mundo")
//     })


// const procesoAsync = (bool) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bool) {
//                 resolve("Juan Carlos")
//             } else {
//                 reject("Promesa rechazada")
//             }
//         }, 2000)
//     })
// }

// procesoAsync(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.log(error)
//     })