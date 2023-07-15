import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"




const PokeList = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [list, setList] = useState([])
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {

                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url])

    const handleSiguiente = () => pagination.next && setUrl(pagination.next)
    const handleAnterior = () => pagination.previous && setUrl(pagination.previous)

    return (
        <div className="container my-5">
            <h2>Poke List</h2>
            <hr/>
            <button onClick={handleAnterior} className="btn btn-outline-primary mx-2">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>

            <div className="row">
                {
                    list.map((pokemon) => <PokeCard key={pokemon.name} url={pokemon.url}/>)
                }
            </div>
        </div>
    )
}

export default PokeList



// const PokeList = () => {
//     const [list, setList] = useState([])
    
//     useEffect(() => {
//         fetch(`https://pokeapi.co/api/v2/pokemon`)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 console.log(data)

//                 setList(data.results)
//             })
//     }, [])

//     return (
//         <div className="container my-5">
//             <h2>Poke List</h2>
//             <hr/>

//             <div className="row">
//                 {
//                     list.map((pokemon) => <PokeCard key={pokemon.name} url={pokemon.url}/>)
//                 }
//             </div>
//         </div>
//     )
// }