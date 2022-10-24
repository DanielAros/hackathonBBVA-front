import React from "react";
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <h1 className="h1">Quality Tech</h1>
            <div className="container-rigth">
                <ul className="list">
                    <li className="li">
                        <NavLink
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '24px',
                                // fontWeight: 'bolder'
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink
                            to="/about"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '24px',
                                // fontWeight: 'bolder'
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
                <form action="http://localhost:3001/api/downloadCSV" method="GET">
                    <input type='submit' value='Descargar CSV' className="button-download"/>
                </form>
            </div>
        </div>
    )
}

export default Header;