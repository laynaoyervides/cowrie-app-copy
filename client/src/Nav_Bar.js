import React from "react"
import {Link} from "react-router-dom"

function NavBar () {
    return (
        <div>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/login">Login</Link>
                <Link to="/learners">Learners</Link>
                <Link to="/tutorials">Tutorials</Link>
                <Link to="/art">Art</Link>
                <Link to="/market">Market</Link>
                <Link to="/nfts">Nfts</Link>

            </nav>
        </div>
    )
}
export default NavBar