import React from 'react'
import c1 from '../../assets/covid.png';
import c2 from '../../assets/covid2.png';
import c3 from '../../assets/covid3.png';
const CovidBanner = () =>{
    return(
      <section>
        <div className="mtop">
          <div className="bg-white mt-3 pt-2 pb-2 mb-5 cround">
            <div className="row">
              <div className="col-sm-3 col-md-3 mtt">
                <img alt="" src={c1} className="img-fluid"/>
              </div>
              <div className="col-sm-9 col-md-9">
                <div className="container mtt">
                  <h5><strong>Safety precautions during COVID-19</strong></h5>
                  <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
                  <br/>
                  <div className="mtop">
                    <button className="btn text-primary kmb">Know more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dtop">
          <div className="d-flex container bg-white mt-3 pt-2 pb-2 mb-5 cround">
              <img alt="" src={c1} height="150px" width="150px" className="img-fluid dtop"/>
              <div className="container dtop mtt">
                  <h5><strong>Safety precautions during COVID-19</strong></h5>
                  <p>We are taking additional steps and precautionary measures to protect our community from COVID-19</p>
                  <br/>
                  <div className="mtop">
                    <button className="btn text-primary kmb" style={{padding: "2%"}}>Know more</button>
                  </div>
              </div>
              <div className="container-fluid dtop faint" >
                  <div className="row mt-3">
                      <div className="col-md-5 col-lg-5 col-sm-12">
                          <img alt="" src={c2} className="mt-2 img-responsive" height="100px" width="100px"/>
                      </div>
                      <div className="col-md-7 col-lg-7 col-sm-12 mt-3">
                          <small >Sanitised<br/>Products &amp; gears</small>
                          <br/>
                          <small><a href="index.html">Know more <i className="fas fa-chevron-circle-right"></i></a></small>
                      </div>
                  </div>
              </div>
              <div className="container-fluid dtop faint" >
                  <div className="row mt-3">
                      <div className="col-md-5 col-lg-5 col-sm-12">
                          <img alt="" src={c3} className="mt-2 img-responsive" height="100px" width="100px"/>
                      </div>
                      <div className="col-md-7 col-lg-7 col-sm-12 mt-3">
                          <small>Hygienic delivery</small><br/>
                          <small>And pickup</small>
                          <br/>
                          <small><a href="index.html">Know more <i className="fas fa-chevron-circle-right"></i></a></small>
                      </div>
                  </div>
              </div>              
          </div>
        </div>
    </section>
    )
}

export default CovidBanner