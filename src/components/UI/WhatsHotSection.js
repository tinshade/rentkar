import React from 'react';
import wh1 from '../../assets/wh1.png';
import wh2 from '../../assets/wh2.png';
import wh3 from '../../assets/wh3.png';
import wh4 from '../../assets/wh4.png';
import wh5 from '../../assets/wh5.png';
const WhatsHotSection = () =>{
    return(
        <section>
        <div className="container mt-3 pt-2 pb-2 mb-4">
            <h2 className="secondary">WHAT'S HOT? <i className="fas fa-2x fa-sort-down"></i></h2>
        </div>
          <div className="gallery wh js-flickity container mt-5" style={{marginBottom: "5%"}}>
            <div className="gallery-cell col-lg-4 col-md-4 col-sm-12 col-lg-4 col-md-4 col-sm-12">
              <div className="card shadow rounded-card">
                <img src={wh5} height="205px" className="rounded-image card-img-top"/>
                <div className="card-body float-left">
                    <small className="text-muted">Starting at</small>
                    <div className="card-header">
                      <h5>₹ ****/day</h5>
                    </div>
                    <div className="card-footer float-right">
                      <button className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
              </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-4 col-sm-12">
                  <div className="card shadow rounded-card">
                    <img src={wh2} height="205px" className="rounded-image card-img-top"/>
                    <div className="card-body float-left">
                        <small className="text-muted">Starting at</small>
                        <div className="card-header">
                          <h5>₹ ****/day</h5>
                        </div>
                        <div className="card-footer float-right">
                          <button className="btn btn-primary">ADD TO CART</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-4 col-sm-12">
                  <div className="card shadow rounded-card">
                    <img src={wh3} height="205px" className="rounded-image card-img-top"/>
                    <div className="card-body float-left">
                        <small className="text-muted">Starting at</small>
                        <div className="card-header">
                          <h5>₹ ****/day</h5>
                        </div>
                        <div className="card-footer float-right">
                          <button className="btn btn-primary">ADD TO CART</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-4 col-sm-12">
                  <div className="card shadow rounded-card">
                    <img src={wh4} height="205px" className="rounded-image card-img-top"/>
                    <div className="card-body float-left">
                        <small className="text-muted">Starting at</small>
                        <div className="card-header">
                          <h5>₹ ****/day</h5>
                        </div>
                        <div className="card-footer float-right">
                          <button className="btn btn-primary">ADD TO CART</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-4 col-sm-12">
                  <div className="card shadow rounded-card">
                    <img src={wh1} height="205px" className="rounded-image card-img-top"/>
                    <div className="card-body float-left">
                        <small className="text-muted">Starting at</small>
                        <div className="card-header">
                          <h5>₹ ****/day</h5>
                        </div>
                        <div className="card-footer float-right">
                          <button className="btn btn-primary">ADD TO CART</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <br/>
            <br/> 
            <br/>
            <br/>
        </section>
    )
}

export default WhatsHotSection