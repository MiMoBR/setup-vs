import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return(
        <header>
            <div style={{ display: `flex`, alignItems: `center`}}>
                <Link to="/">Add To Do List</Link>
                <p>&nbsp; || &nbsp;</p>
                <Link to="/to-do-list/">To Do List</Link>
                <p>&nbsp; || &nbsp;</p>
                <Link to="/result-to-do-list/">Result To Do List</Link>
            </div>
        </header>
    )
}

export default Header