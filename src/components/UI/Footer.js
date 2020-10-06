import React from 'react';
import logo from '../../assets/footerlogo.png';
import HomeIcon from './HomeIcon.jsx';
import SearchIcon from './SearchIcon.jsx';
import Bag from './Bag.jsx';
import UserIcon from './UserIcon';
const Footer = () =>{
    return(
        <div>
        <div className="dtop">
          <footer className="dark footer-rent">
          <div className="container pl-2 pr-2">
              <div className="row pt-5 text-center">
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <img src={logo} alt="" className="dtop footer-logo img-fluid"/>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12  mt-2">
                  <a href="/">POLICIES</a>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12  mt-2">
                  <a href="/">ABOUT US</a>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12  mt-2">
                  <a href="/">OUR BENEFITS</a>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12  mt-2">
                  <a href="/">FAQ</a>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 mt-2">
                  <a href="/">BLOG</a>
                </div>
              </div>
              <br/>
              <div className="contianer pl-2 pr-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae animi vel perspiciatis nemo voluptates, deleniti, aliquam odio voluptatibus nam, laudantium amet eius esse? Accusantium hic asperiores ex officia sed!</p>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="container-fluid mt-5">
                    <h4>CONTACT US</h4>
                    <br/>
                    <div className="row contact">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <h6><i className="p-2 fas fa-envelope rounded-circle"></i>&emsp;<span>iyengar.abhi@gmail.com</span></h6>
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <h6><i className="p-2 fas fa-phone rounded-circle"></i>&emsp;<span>8793656170</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="container-fluid mt-5">
                    <h4>FOLLOW US ON</h4>
                    <br/>
                    <div className="container-fluid follow">
                      <i className="followIcons mr-5 fab fa-instagram text-white"></i>
                      <i className="followIcons mr-5 fab fa-twitter text-white"></i>
                      <i className="followIcons mr-5 fab fa-youtube text-white"></i>
                      <i className="followIcons fab fa-facebook text-white"></i>
                    </div>
                  </div>
                </div>
                
                <div className="container text-center">
                  <div className="spacer"></div>
                  <small>Sample by Abhishek Iyengar</small>
                  <br/><br/><br/><br/>
                </div>
            </div>
            </div>
          </footer>
        </div>


        <div className="mtop">
          <footer className="dark footer-rent">
            <div className="container">
              <br/>
              <br/>
              <div className="contianer pl-2 pr-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae animi vel perspiciatis nemo voluptates, deleniti, aliquam odio voluptatibus nam, laudantium amet eius esse? Accusantium hic asperiores ex officia sed!</p>
              </div>
              <br/>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="policies" role="button" aria-expanded="false" aria-controls="policies">
                  POLICIES
                </a>
                <a data-toggle="collapse" href="policies" role="button" aria-expanded="false" aria-controls="policies">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="policies">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="aboutus" role="button" aria-expanded="false" aria-controls="aboutus">
                  ABOUT US
                </a>
                <a data-toggle="collapse" href="aboutus" role="button" aria-expanded="false" aria-controls="aboutus">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="aboutus">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="CONTACT" role="button" aria-expanded="false" aria-controls="CONTACT">
                  CONTACT
                </a>
                <a data-toggle="collapse" href="CONTACT" role="button" aria-expanded="false" aria-controls="CONTACT">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="CONTACT">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="OURBENEFITS" role="button" aria-expanded="false" aria-controls="OURBENEFITS">
                  OUR BENEFITS
                </a>
                <a data-toggle="collapse" href="OURBENEFITS" role="button" aria-expanded="false" aria-controls="OURBENEFITS">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="OURBENEFITS">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="FAQ" role="button" aria-expanded="false" aria-controls="FAQ">
                  FAQ
                </a>
                <a data-toggle="collapse" href="FAQ" role="button" aria-expanded="false" aria-controls="FAQ">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="FAQ">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <div className="container d-flex justify-content-between">
                <a data-toggle="collapse" href="BLOG" role="button" aria-expanded="false" aria-controls="BLOG">
                  BLOG
                </a>
                <a data-toggle="collapse" href="BLOG" role="button" aria-expanded="false" aria-controls="BLOG">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
              <hr/>
              <div className="collapse" id="BLOG">
                <div className="container sub">
                  <a href="/">Shipping Policy</a>
                  <br/>
                  <a href="/">Return &amp; Refund</a>
                  <br/>
                  <a href="/">Privacy Policy</a>
                  <br/>
                  <a href="/">Rental Terms &amp; Conditions</a>
                  <br/>
                  <a href="/">Terms of Use</a>
                  <br/>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <div className="mt-5 mb-5 container text-center d-flex justify-content-center">
                <i className="foli mr-5 fab fa-instagram text-white"></i>
                <i className="foli mr-5 fab fa-twitter text-white"></i>
                <i className="foli mr-5 fab fa-youtube text-white"></i>
                <i className="foli fab fa-facebook text-white"></i>
              </div>
              <div className="spacer"></div>
              <div className="container text-center mb-5">
                <small>Sample by Abhishek Iyengar</small>
              </div>
              <br/>
            </div>
            
          </footer>
        </div>
        <div className="mtop">
          <nav className="fixed-bottom container text-center dark customnav">
            <div className="d-flex justify-content-between">
              <div className="container">
                <HomeIcon />
              </div>
              <div className="container">
                <SearchIcon/>
              </div>
              <div className="container">
                <Bag />
              </div>
              <div className="container">
                <UserIcon/>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
    
}


export default Footer