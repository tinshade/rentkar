import React from 'react'
import c1 from '../../assets/covid.png';
import c2 from '../../assets/covid2.png';
import c3 from '../../assets/covid3.png';
const CovidBanner = () =>{
    return(
      <section>
        <div className="mtop">
          <div className="container">
            <div className="container bg-white cround">
              <div className="d-flex">
                <div>
                  <img alt="" src={c1} className="img-fluid" width="200px" height="200px"/>
                </div>
                <div>
                  <h5><strong>Safety precautions during COVID-19</strong></h5>
                  <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
                  <button className="btn text-primary kmb">Know more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dtop">
          <div className="container bg-white cround">
            <div className="row">
              <div className="col-md-2 col-lg-2">
                <img alt="" src={c1} height="120px" className="img-fluid"/>
              </div>
              <div className="col-md-5 col-lg-5">
                <br/>
                <h5><strong>Safety precautions during COVID-19</strong></h5>
                <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
              </div>
              <div className="col-md-5 col-lg-5">
                <br/>
                <div className="row">
                  <div className="col-md-6 col-lg-6" style={{padding: "0px"}}>
                    <div className="container dtop faint">
                      <div className="row">
                          <div className="col-md-4 col-lg-4 p-2">
                              <img alt="" src={c2} className=" img-fluid" height="100px" width="100px"/>
                          </div>
                          <div className="col-md-8 col-lg-8 p-2">
                              <small >Sanitised<br/>Products &amp; gears</small>
                              <br/>
                              <small><a href="/">Know more <i className="fas fa-chevron-circle-right"></i></a></small>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6" style={{paddingRight: "10px"}}>
                    <div className="container dtop faint" >
                      <div className="row">
                          <div className="col-md-4 col-lg-4 p-2">
                              <img alt="" src={c3} className="img-fluid" height="100px" width="100px"/>
                          </div>
                          <div className="col-md-8 col-lg-8 p-2">
                            <small>Hygienic delivery <br/>And pickup</small>
                            <br/>
                            <small><a href="index.html">Know more <i className="fas fa-chevron-circle-right"></i></a></small>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}

export default CovidBanner