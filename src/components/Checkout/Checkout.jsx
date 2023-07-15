import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(3, "El nombre es muy corto")
                .max(20, "El nombre es demasiado largo"),
    direccion: Yup.string()
                .required("Este campo es obligatorio")
                .min(6, "La dirección es muy corta")
                .max(30, "La dirección es demasiado larga"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("Email inválido")
})


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock= []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })  
                        .catch(err => console.log(err))
                })
        } else {
            alert("Hay items sin stock")
        }
       
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró correctamente!</h2>
                <hr/>
                <p>Tu número de compra es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={crearOrden}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field type="text" name="nombre" className="form-control my-2"/>
                        <ErrorMessage name="nombre" component={"p"}/>
                        <Field type="text" name="direccion" className="form-control my-2"/>
                        <ErrorMessage name="direccion" component={"p"}/>
                        <Field type="email" name="email" className="form-control my-2"/>
                        <ErrorMessage name="email" component={"p"}/>
                        <button className="btn btn-primary">Enviar</button>
                    </Form>
                )}

                {/* {({values, errors, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={values.nombre}
                            type="text"
                            placeholder="Nombre"
                            onChange={handleChange}
                            className="form-control my-2"
                            name="nombre"
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <input 
                            value={values.direccion}
                            type="text"
                            placeholder="Direccion"
                            onChange={handleChange}
                            className="form-control my-2"
                            name="direccion"
                        />
                        {errors.direccion && <p>{errors.direccion}</p>}

                        <input 
                            value={values.email}
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className="form-control my-2"
                            name="email"
                        />
                        {errors.email && <p>{errors.email}</p>}

                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </form>
                )} */}
            </Formik>            
        </div>
    )
}

export default Checkout

// getDoc(docRef)
//                 .then((doc) => {
//                     const stock = doc.data().stock

//                     if (stock >= item.cantidad) {
//                         updateDoc(docRef, {
//                             stock: stock - item.cantidad
//                         })
//                     } else {
//                         alert("No hay stock X")
//                     }
//                 })