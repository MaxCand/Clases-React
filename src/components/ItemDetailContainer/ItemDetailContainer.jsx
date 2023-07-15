
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        // 1.- armar la referencia
        const itemRef = doc(db, "productos", itemId)
        // 2.- solicitar el doc
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [itemId])

    return (
        <div className="container my-5">
           {
            loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer
