import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link to="/" style={{ fontSize: "30px", fontWeight: "700", textDecoration: "none", color: "black" }}>
                    <span className="navbar-brand mb-0 h1">Logo</span>
                    </Link>

                    <div style={{ display: "flex" }}>
                        <Link to="/header" style={{ paddingRight: "30px", cursor: "pointer", textDecoration: "none", color: "black" }}>
                            <p >Header</p>
                        </Link>
                        <Link to="/section" style={{ paddingRight: "30px", cursor: "pointer", textDecoration: "none", color: "black" }}>
                            <p >Section</p>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    )
}
