import { useState, useEffect } from "react"


export const Clicker2 = ( {init = 0, step = 1} ) => {
    const [counter, setCounter] = useState( Number(localStorage.getItem('counter')) || init )
    const [saludar, setSaludar] = useState(false)

    const sumar = () => {
        setCounter(counter + step)
    }

    const restar = () => {
        setCounter(counter - step)
    }

    const reset = () => {
        setCounter(init)
    }

    const cambiar = () => {
        setSaludar(!saludar)
    }
    
    useEffect(() => {
        console.log("Componente montado")
        
        return () => {
            console.log("Componente desmontado")
        }
    }, [])
    
    // useEffect(() => {
    //     console.log("actualizacion de saludar", saludar)

    //     return () => {
    //         console.log("limpieza de saludar", saludar)
    //     }
    // }, [saludar])

    useEffect(() => {
        localStorage.setItem('counter', counter)
    }, [counter])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button onClick={sumar} className="btn btn-primary">Sumar</button>
            <button onClick={restar} className="btn btn-primary">Restar</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <p>{counter}</p>

            <hr/>
            <button onClick={cambiar} className="btn btn-primary">Click me</button>            
            <p>{saludar ? "Hola mundo" : "Chau mundo"}</p>
        </div>
    )
}