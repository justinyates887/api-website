import React from 'react'

export function NavHeader(){
    return(
        <nav className="navbar navbar-light  fixed-top navHover">
            <div className="container-fluid">
                <a className="navbar-brand" id="opacity-full" name="Home" aria-label="Home" href="/"><img src="../../../assets/img/double-waves.webp" width="50" alt=""/></a>
                <button className="navbar-toggler" name="NavBar Toggle" id="opacity-full" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label='NavBar Toggle'>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Associated Pools Inc.</h5>
                    <button type="button" name="Close" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About Us
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown2">
                        <li><a className="dropdown-item" href="/about/company">The Company</a></li>
                        <li><a className="dropdown-item" href="/about/people">The People</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown4">
                        <li><a className="dropdown-item" href="/services/residential">Residential</a></li>
                        <li><a className="dropdown-item" href="/services/commercial">Commercial</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/services/service">Service</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        What We Use
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a className="dropdown-item" href="/about/starting">Starting Equipment</a></li>
                        {/*<li><a className="dropdown-item" href="/about/pentair">Why Pentair?</a></li>*/}
                        <li><a className="dropdown-item" href="/about/chemicals">Chemicals</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="associatedpoolsinc.com" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label='Resources Dropdown'>
                        Resources
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a className="dropdown-item" href="/resources/equipment">Equipment</a></li>
                        <li><a className="dropdown-item" href="/resources/stoneandtile">Stone & Tile</a></li>
                        <li><a className="dropdown-item" href="/resources/chemicals">Chemical MSDS</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    </ul>
                    <div className='row position-absolute bottom-0 start-50 translate-middle'>
                        <div className='col'>
                            <a href='/policies/privacy'>Privacy</a>
                        </div>
                        <div className='col'>
                            <a href='/policies/cookies'>Cookies</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}