import { useFetch } from "../../hooks/useFetch"
import { withFetch } from "../hoc/withFetch"

// const PokeCard = ({url}) => {
//     const { data: pokemon} = useFetch(url)

//     return (
//         <div className="col-3 m-2">
//             {
//                 pokemon && 
//                     <div>
//                         <h4>{pokemon.name}</h4>
//                         <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
//                     </div>
//             }
//         </div>
//     )
// }

const PokeCard = ({data: pokemon}) => {

    return (
        <div className="col-3 m-2">
            {
                pokemon && 
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            }
        </div>
    )
}


export default withFetch(PokeCard)