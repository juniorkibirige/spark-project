/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const NavBar = (props) => {
    const { logo } = props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                <span className="navbar-brand h1">
                    <img src={logo} alt="POS Logo" className="d-inline-block align-text-top" height={30} width={30} />
                </span>
                    <div className="navbar-brand h1 mt-2">Spark POS</div>
                <button className="navbar-toggler" style={{
                    maxWidth: 'min-content'
                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Link
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" style={{maxWidth: 'min-content'}} type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </>
    );
}

NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
}


export default NavBar;