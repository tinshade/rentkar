import React from 'react';
import StartEarningSection from './StartEarningSection';
import bbg from '../../assets/bb2.png';
const LYISection = () =>{
    return(
    <section className="bg-white">
      <div className="mtop bg-white">
        <div className="row container">
            <div className="col-sm-12 col-lg-6 col-md-6">
                <div className="container mt-5">
                    <h4 className="secondary">LIST YOUR ITEM</h4>
                    <br/>
                    <h5 className="sectwo">We help you share</h5>
                    <p className="secthree">Join our community of lenders sharing their products all around the city. We help you with delivery, pick up and total security of your products.</p>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 text-center" style={{padding: "0px", margin: "0px"}}>
                <div className="container p-4">
                    <img src={bbg} className="img-fluid"  alt=""/>
                </div>
                <div className="text-center">
                    <button className="btn mr-3 pt-3 pb-3 navbtn-alt">Learn more</button>
                    <button className="btn ml-3 pt-3 pb-3 navlog" style={{color:"white"}}>List an item</button>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    </div>
    <div className="dtop bg-white" style={{height:"90vh", background: `url(${bbg}) no-repeat`,backgroundPosition: "70%", backgroundSize: "70ex"}}>
        <br/>
        <br/>
        <div className="container mt-3 pt-2 pb-2 mb-4">
            <h2 className="secondary">LIST YOUR ITEM</h2>
            <br/>
            <h5  className="sectwo">We help you share</h5>
            <p className="secthree" >Join our community of lenders sharing their products <br/>all around the city. We help you with delivery, pick up <br/>and total security of your products.</p>
            <br/>
            <br/>
            <div className="d-flex">
                <button className="btn mr-3 pt-3 pb-3 navbtn-alt">Learn more</button>
                <button className="btn ml-3 pt-3 pb-3 navlog" style={{color:"white"}}>List an item</button>
            </div>
        </div>
    </div>
    <StartEarningSection/>
</section>
    )
}


export default LYISection