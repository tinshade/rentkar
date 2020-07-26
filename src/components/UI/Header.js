import React from 'react';
import logo from '../../assets/logo.png'
const Header = () =>{
    return(
        <header>
          <nav className="navbar navbar-expand-lg dark" data-toggle="affix">
            <div className="mx-auto d-lg-flex d-md-flex pt-3 pb-3">
                <div className="mtop justify-content-between">
                    <a className="btn navbtn"><i className="fas fa-map-marker-alt fa-gradient"></i> Mumbai</a>
                    <a className="pl-3 pr-3" href="#"><img src={logo} width="90px"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                      <span role="button">
                        <svg style={{fill: "white"}} viewBox="0 0 100 80" width="40" height="50">
                          <rect width="100" height="20" rx="8" ></rect>
                          <rect y="30" width="100" height="20" rx="8"></rect>
                        </svg>
                      </span>
                    </button>
                </div>
                <div className="collapse navbar-collapse dtop" id="navbarsExample11">
                    <ul className="navbar-nav">
                      <li className="nav-item dtop ml-4 mr-4">
                        <a className="navbar-brand" href="#"><img src={logo} height="25px" width="150px"/></a>
                      </li>
                        <li className="nav-item dtop ml-4 mr-4">
                            <a className="btn navbtn"><i className="fas fa-map-marker-alt fa-gradient"></i> Mumbai</a>
                        </li>
                        <li className="nav-item ml-4 dtop mr-4">
                            <form className="form-inline navsearch">
                                <input className="form-control" placeholder="Search for instruments, gaming gear, cameras & assets " />
                                {/* <i className="fas fa-search"></i> */}
                            </form>
                        </li>
                        <li className="nav-item ml-4 dtop mr-4">
                            <a className="btn navbtn"><i className="mr-2 fas fa-shopping-bag"></i>Bag</a>
                        </li>
                        <li className="nav-item ml-4 dtop mr-4">
                            <a className="btn navlog">Login/Sign Up</a>
                        </li>
                    </ul>
                </div>
                <div className="mtop">
                  <div className="collapse navbar-collapse" id="navbarsExample11">
                    <ul className="navbar-nav container">
                      <li className="nav-item mt-4 mt-4">
                          <a className="btn navbtn"><i className="mr-2 fas fa-shopping-bag"></i>Bag</a>
                      </li>
                      <li className="nav-item mt-4 mt-4">
                          <a className="btn navlog">Login/Sign Up</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
        </nav>
      </header>
    )
}


export default Header;