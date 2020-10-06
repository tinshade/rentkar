import React from 'react';



const StartEarningSection = () =>{
    return(
    <section id="StartEarning">
        <div className="mtop bg-white" style={{marginTop: "5%"}}>
            <div className="container">
                <div className="p-1">
                    <h2 className="secondary">START EARNING NOW</h2>
                    <h5 className="sectwo">Earn from the products shared securedly around the city.</h5>
                    <br/>
                    <p className="secthree">Also get 100 INR Share Credit on each item and 250 INR Share Credit on getting your friend on board to list their items.</p>
                    <div className="container text-center">
                        <button className="btn navlog" style={{color:"white"}}>Start Earning</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="dtop">
            <div className="container">
                <h2 className="secondary">START EARNING NOW</h2>
                <br/>
                <h5 className="sectwo" style={{width: "40%"}}>Earn from the products shared securedly around the city.</h5>
                <br/>
                <br/>
                <div className="d-flex">
                    <p className="secthree" style={{width: "40%"}}>Also get 100 INR Share Credit on each item and 250 INR Share Credit on getting your friend on board to list their items.</p>
                    <div>
                        <div className="d-flex pl-5">
                            <button className="btn p-3 mr-2 navlog" style={{color:"white"}}>Start Earning</button>
                            <button className="btn p-3 ml-2 navbtn-alt">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    )
}


export default StartEarningSection