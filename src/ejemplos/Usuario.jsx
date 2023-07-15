
export const Usuario = ({nombre, edad, curso, rol, estado}) => {
    // console.log(props) // nombre, edad, curso, rol
    // const { nombre, edad, curso, rol } = props

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Curso: {curso}</p>
            <p>Rol: {rol}</p>
            <p>Estado: {estado}</p>
            <hr/>
        </div>
    )
}