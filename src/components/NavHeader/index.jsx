import React from 'react'

export function NavHeader(){
    return(
        <nav className="navbar navbar-light  fixed-top navHover">
            <div className="container-fluid">
                <a className="navbar-brand" id="opacity-full" href="/"><img src="../../../assets/img/double-waves.webp" width="50" alt=""/></a>
                <button className="navbar-toggler" id="opacity-full" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Associated Pools Inc.</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About Us
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a className="dropdown-item" href="/about/company">The Company</a></li>
                        <li><a className="dropdown-item" href="/about/people">The People</a></li>
                        <li><a className="dropdown-item" href="associatedpoolsinc.com">The Mission</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a className="dropdown-item" href="associatedpoolsinc.com">Residential</a></li>
                        <li><a className="dropdown-item" href="associatedpoolsinc.com">Commercial</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="associatedpoolsinc.com">Service</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    )
}