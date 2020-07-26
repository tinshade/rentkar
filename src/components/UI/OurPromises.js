import React from 'react';
import op1 from '../../assets/op1.png';
import op2 from '../../assets/op2.png';
import op3 from '../../assets/op3.png';
import op4 from '../../assets/op4.png';
import op5 from '../../assets/op5.png';
const OurPromises = () =>{
    return(
        <section>
        <br/>
        <br/>
        <br/>
        <div className="container mt-3 p-2 pb-2 mb-4 op">
            <h2 className="secondary">OUR PROMISES</h2>
            <br/>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={op1} height="75px" width="75px" className="img-fluid mb-3"/>
                    <h5  className="sectwo" >No Security Deposit</h5>
                    <p>Rent is the only fee you pay</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={op2} height="150px" width="132px" className="img-fluid mb-3"/>
                    <h5  className="sectwo" >Same Day Delivery</h5>
                    <p>Just book your order and relax</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={op3} height="75px" width="100px" className="img-fluid mb-3"/>
                    <h5  className="sectwo">Share & Earn</h5>
                    <p>Unused items? They can be shared securely.</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={op4} height="85px" width="85px" className="img-fluid mb-3"/>
                    <h5  className="sectwo" >Live Lighter</h5>
                    <p>Sharing is the key to sustainable living</p>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={op5} height="75px" width="75px" className="img-fluid mb-3"/>
                    <h5  className="sectwo" >Spend Less, Explore More</h5>
                    <p>Pursue your passion, don’t limit your choices</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default OurPromises