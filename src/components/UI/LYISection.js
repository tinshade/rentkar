import React from 'react';
import StartEarningSection from './StartEarningSection';
import bbg from '../../assets/bluebackground-04.png';
const LYISection = () =>{
    return(
    <section className="bg-white">
      <section className="mtop">
        <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-6">
                <div className="container mt-5 pt-2 p-5 pb-2 mb-4">
                    <h4 className="secondary">LIST YOUR ITEM</h4>
                    <br/>
                    <h5  className="sectwo">We help you share</h5>
                    <p style={{color: "rgba(128,128,128,0.8)"}}>Join our community of lenders sharing their products <br/>all around the city. We help you with delivery, pick up <br/>and total security of your products.</p>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 text-center">
                <img src={bbg} className="img-fluid" alt=""/>
                <div className="text-center">
                    <button className="btn mr-3 pt-3 pb-3 navbtn" style={{backgroundColor: "white!important", color: "#1bacf4!important"}}>Learn more</button>
                    <button className="btn ml-3 pt-3 pb-3 navlog" style={{color:"white"}}>List an item</button>
                </div>
                <br/>
                <br/> 
                <br/>
                <br/>
            </div>  
        </div>
    </section>
    <section className="dtop" style={{height:90+"vh", background: `url(${bbg}) no-repeat`,backgroundPosition: "right", backgroundSize: 90+"ex"}}>
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
                <button className="btn mr-3 pt-3 pb-3 navbtn" style={{backgroundColor: "white!important", color: "#1bacf4!important"}}>Learn more</button>
                <button className="btn ml-3 pt-3 pb-3 navlog" style={{color:"white"}}>List an item</button>
            </div>
        </div>
    </section>
    <StartEarningSection/>
</section>
    )
}


export default LYISection