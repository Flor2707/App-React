import React from 'react'
import Cardwidget from '../CartWidget'
import { Link } from 'react-router-dom';


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
        <>
        <div>
      
            <h1>{titulo}</h1>
            <nav style={styles.nav}>
          
            <ul  style={styles.list}>
                <li><a href='/'  style={styles.link}>Productos</a></li>
                <li><a href='/line/Terra' style={styles.link} >Terra</a></li>
                <li><a href='/line/Aqua'  style={styles.link}>Aqua</a></li>
                
            </ul>
           
            <Cardwidget/>
            </nav>
        </div>
        </>
    )
}
export default NavBar


