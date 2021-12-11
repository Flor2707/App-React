import React from 'react'
import Cardwidget from '../CartWidget'

const NavBar = ({titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <ul>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
            <Cardwidget/>
        </div>
    )
}
export default NavBar