import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import WithFetch from "../renderprops/WithFetch"



const PokeApi = () => {

    const [id, setId] = useState(1)
    
    // const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleSiguiente = () => setId(id + 1)
    const handleAnterior = () => id > 1 && setId(id - 1)

    return (
        <div className="container my-5">
            <h2>Poke api</h2>
            <hr/>

            <WithFetch url={`https://pokeapi.co/api/v2/pokemon/${id}`} arr={[id]}>
                {(pokemon) => (
                        pokemon && 
                            <div>
                                <h4>{pokemon.name}</h4>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            </div>
                    )
                }
            </WithFetch>
            

            <hr/>
            <button onClick={handleAnterior} className="btn btn-outline-primary mx-2">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary">Siguiente</button>
        </div>
    )
}

export default PokeApi