


const MiContenedor = ( {children} ) => {

    const estilos = {
        backgroundColor: 'grey',
        color: 'white',
        maxWidth: '1100px',
        margin: '0 auto'
    }

    return (
        <div style={estilos}>
            <h3>Hola mundo</h3>
            {children}
        </div>
    )
}

export default MiContenedor