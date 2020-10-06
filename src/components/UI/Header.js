import React from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/icons/search.svg';
import gps from '../../assets/icons/gps.png'

const Header = () =>{
    return(
          <nav className="navbar navbar-expand-lg dark" data-toggle="affix">
            <div className="d-flex pt-3 pb-3" style={{width: "90%"}}>
                <div className="mtop justify-content-between">
                    <a href="/" className="btn navbtn"><i className="fas fa-map-marker-alt fa-gradient"></i> Mumbai</a>
                    <a className="pl-3 pr-3" href="/"><img src={logo} width="90px" alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                      <span role="button">
                        <svg style={{fill: "white"}} viewBox="0 0 100 80" width="40" height="50">
                          <rect width="100" height="20" rx="8" ></rect>
                          <rect y="30" width="100" height="20" rx="8"></rect>
                        </svg>
                      </span>
                    </button>
                </div>
                <div className="collapse navbar-collapse dtop" id="navbarsExample11">
                    <ul className="navbar-nav justify-content-between">
                      <li className="nav-item dtop">
                        <a className="navbar-brand" href="/"><img alt="" src={logo} className="img-fluid" width="150px"/></a>
                      </li>
                        <li className="nav-item dtop">
                            <a href="/" className="btn navbtn"><img alt="" height="20px" width="20px" src={gps}/ > Mumbai</a>
                        </li>
                        <li className="nav-item ml-4 dtop">
                            <form className="form-inline navsearch">
                                <input className="form-control" style={{width: 35+"rem"}} placeholder="Search for instruments, gaming gear, cameras &amp; as....&emsp;&emsp;&emsp;" />
                                <img src={search} alt="" height="40%" width="40%" style={{Color: "black"}}/>
                            </form>
                        </li>
                        <li className="nav-item ml-4 dtop">
                            <a href="/" className="btn navbtn"><i className="mr-2 fas fa-shopping-bag"></i>Bag</a>
                        </li>
                        <li className="nav-item ml-4 dtop">
                            <a href="/" className="btn navlog">Login/Sign Up</a>
                        </li>
                    </ul>
                  
                </div>
                <div className="mtop">
                  <div className="collapse navbar-collapse" id="navbarsExample11">
                    <ul className="navbar-nav container">
                      <li className="nav-item mt-4 mt-4">
                          <a href="/" className="btn navbtn"><i className="mr-2 fas fa-shopping-bag"></i>Bag</a>
                      </li>
                      <li className="nav-item mt-4 mt-4">
                          <a href="/" className="btn navlog">Login/Sign Up</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
        </nav>
    )
}


export default Header;