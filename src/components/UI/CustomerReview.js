import React from 'react';
import fbg from '../../assets/fbg2.png';
import guy1 from '../../assets/guy1.png';
import guy2 from '../../assets/guy2.png';
const CustomerReview = () =>{
    return(
        <section className="bg-white cmer customersection" style={{background:`url(${fbg}) no-repeat center/cover`}}>
          <div className="container mb-5">
            <div className="container mt-3 pt-2 pb-2 mb-4">
                <h2 className="secondary">NOTE FROM OUR HAPPY CUSTOMERS</h2>
            </div>
            <div className="gallery js-flickity container mt-5 customer">
                <div className="gallery-cell col-lg-4 col-md-6 col-sm-12">
                  <div className="card shadow rounded-card">
                    <div className="card-body">
                      <div className="d-flex">
                        <img alt="" src={guy1} height="75px" width="75px" className="img-fluid rounded-circle"/>
                        <div className="container mt-2">
                          <h6 className="secondary-cname">Shivam Wadhwa</h6>
                          <div className="c-star">
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid mt-2"  style={{margin: "0px", padding:"0px"}}>
                        <p className="secthree-comment">Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price. Highly recommended.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-6 col-sm-12">
                  <div className="card shadow rounded-card">
                    <div className="card-body">
                      <div className="d-flex">
                        <img alt="" src={guy2} height="75px" width="75px" className="img-fluid rounded-circle"/>
                        <div className="container mt-2">
                          <h6 className="secondary-cname">Shivam Wadhwa</h6>
                          <div className="c-star">
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid mt-2" style={{margin: "0px", padding:"0px"}}>
                        <p className="secthree-comment">Rentkar is really good!! The quality of the product is br/illiant. The service is also spot on. They make sure that the product is delivered as well as picked up on time. Highly recommended.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-6 col-sm-12">
                  <div className="card shadow rounded-card">
                    <div className="card-body">
                      <div className="d-flex">
                        <img alt="" src={guy2} height="75px" width="75px" className="img-fluid rounded-circle"/>
                        <div className="container mt-2">
                          <h6 className="secondary-cname">Shivam Wadhwa</h6>
                          <div className="c-star">
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid mt-2" style={{margin: "0px", padding:"0px"}}>
                        <p className="secthree-comment">Rentkar is really good!! The quality of the product is br/illiant. The service is also spot on. They make sure that the product is delivered as well as picked up on time. Highly recommended.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gallery-cell col-lg-4 col-md-6 col-sm-12">
                  <div className="card shadow rounded-card">
                    <div className="card-body">
                      <div className="d-flex">
                        <img alt="" src={guy1} height="75px" width="75px" className="img-fluid rounded-circle"/>
                        <div className="container mt-2">
                          <h6 className="secondary-cname">Shivam Wadhwa</h6>
                          <div className="c-star">
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                            <i className="text-warning fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid mt-2" style={{margin: "0px", padding:"0px"}}>
                        <p className="secthree-comment">Ordered Yamaha acoustic guitar through rentkar, they offer great gadgets at a very cheap price. Highly recommended.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
    )
}

export default CustomerReview