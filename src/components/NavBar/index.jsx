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
               <li><Link to='/'  style={styles.link}>Productos</Link></li>
               <li><Link to='/line/Terra' style={styles.link} >Terra</Link></li>
               <li><Link to='/line/Aqua'  style={styles.link}>Aqua</Link></li>
            </ul>
           
            <Cardwidget/>
            </nav>
        </div>
        </>
    )
}
export default NavBar


