import React from 'react';



const StartEarningSection = () =>{
    return(
        
    <section className="dtop" style={{marginTop: "15%"}}>
        <div className="container mt-3 pt-2 pb-2 mb-4">
            <h2 className="secondary">START EARNING NOW</h2>
            <br/>
            <h5 style={{fontWeight: "bold", color: "gray", width: "40%"}}>Earn from the products shared securedly around the city.</h5>
            <br/>
            <br/>
            <div className="d-flex" style={{marginBottom: "15%"}}>
                <p className="secthree" style={{width: "40%"}}>Also get 100 INR Share Credit on each item and 250 INR Share Credit on getting your friend on board to list their items.</p>
                <div className="ml-4">
                    <button className="btn pt-3 pb-3 ml-2 mr-2 navlog" style={{color:"white"}}>Start Earning</button>
                    <button className="btn pt-3 pb-3 ml-2 mr-2 navbtn" style={{backgroundColor: "white!important", color: "#1bacf4!important"}}>Learn more</button>
                </div>
            </div>
        </div>
    </section>
    )
}


export default StartEarningSection