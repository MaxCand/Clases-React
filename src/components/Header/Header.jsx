import './Header.scss'
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import Buscador from '../../ejemplos/Buscador'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Header = ({variant = false}) => {
    const { user, logout } = useContext(AuthContext)

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                {/* <img src='/img/vite.svg' alt='logo'/> */}
                <img src={logo} alt='logo'/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/panaderia">Panaderia</Link>
                    <Link className="header__link" to="/productos/carniceria">Carniceria</Link>
                    <Link className="header__link" to="/productos/perfumeria">Perfumeria</Link>
                    <Link className="header__link" to="/productos/verduleria">Verduleria</Link>
                    <Link className="header__link" to="/nosotros">Nosotros</Link>
                </nav>

                <CartWidget />
            </div>
            {/* <Buscador /> */}
            <p>Bienvenido: {user.email}</p>
            <button className='btn btn-danger' onClick={logout}>Logout</button>
        </header>
    )
}

export default Header