import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    iStocks
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/stocks">
                        <div>home</div>
                    </Link>
                </li>
                <li>
                    <Link to="/stocks">
                        <div>stocks</div>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <div>about</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav