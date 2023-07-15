import './MiBoton.scss'


const MiBoton = ({onClick, children}) => {

    return (
        <button className='mi-boton' onClick={onClick}>
            {children}
        </button>
    )
}

export default MiBoton