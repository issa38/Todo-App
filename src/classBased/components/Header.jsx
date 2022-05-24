import React from 'react';
import styles from '../components/TodoItem.module.css'

const Header = () =>{

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    return(
    <header style={headerStyle}>
        <h1 className={styles.header}>Todos</h1>
    </header>
    )
}

export default Header