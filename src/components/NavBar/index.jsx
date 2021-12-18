import React from 'react'
import Cardwidget from '../CartWidget'

const styles = {
    link: {
        textDecoration: "none",
        color: "white",
        margin: "10px",
    },
    list: {
        display:"flex",
        justifyContent: "flex-end",
        listStyle: "none",

    },
    nav: {
        backgroundColor: "pink",
    },
};


const NavBar = ({titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <nav style={styles.nav}>
            <ul  style={styles.list}>
                <li><a href='#' style={styles.link} >Productos</a></li>
                <li><a href='#'  style={styles.link}>Nosotros</a></li>
                <li><a href='#'  style={styles.link}>Contacto</a></li>
            </ul>
            <Cardwidget/>
            </nav>
        </div>
    )
}
export default NavBar