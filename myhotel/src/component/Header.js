import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <>
                {/* <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <img src='/V.png' className="img-fluid rounded mx-auto img-thumbnail" style={{ padding: "15px", scale: ".2", boxShadow: "0 0 49px -13px",borderRadius: "267px"}} alt='' />
                </nav> */}

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{userSelect:"none"}}>
                    <div className="container-fluid">
                        <a class="navbar-brand" href="/#" style={{ width: "100px" }}>
                            <img src="/V.png" alt="" height={100} width={100} style={{
                                position: "absolute", top: "5px", filter: "brightness(1.2)",
                                boxShadow: "0 0 25px -2px black", borderRadius: "267px",
                                border: "4px solid white"
                            }} />
                        </a>
                        {/* <img src='/V.png' className="rounded" style={{ padding: "15px", scale: ".2", boxShadow: "0 0 49px -13px",borderRadius: "267px"}} alt='' /> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/#">Action</a></li>
                                        <li><a className="dropdown-item" href="/#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>


        )
    }
}

export default Header