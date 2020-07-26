import React from 'react';
import ex1 from '../../assets/ex1.png';
import ex2 from '../../assets/ex2.png';
const ExploreSection = () =>{
    return(
    <section>
        <div className="container mt-3 pt-2 pb-2 mb-4">
            <h2 className="secondary">EXPLORE CATEGORIES</h2>
        </div>
        <div className="container text-center mt-3 pt-2 pb-2 mb-5">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <div className="card shadow rounded-card" style={{padding:"0px"}}>
                        <img className="card-img-top rounded-image" src={ex1} height="205px"/>
                        <h5 className="card-header mt-2 mb-2">MUSICAL</h5>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <div className="card shadow rounded-card" style={{padding:"0px"}}>
                        <img className="card-img-top rounded-image" src={ex2} height="205px"/>
                        <h5 className="card-header mb-2 mt-2 ">GAMING</h5>
                    </div>
                </div>
            </div>            
        </div>
    </section>
    )
}

export default ExploreSection