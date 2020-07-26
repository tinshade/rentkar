import React from 'react'
import s1 from '../../assets/slide1.jpg'


const MajorCarousel = () =>{
    return(
        <section id="carousel">
            <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner container mt-5">
                    <div className="carousel-item active">
                        <div className="rounded-card shadow">
                            <img src={s1} className="img-fluid rounded-image"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="rounded-card shadow">
                            <img src={s1} className="img-fluid rounded-image"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="rounded-card shadow">
                            <img src={s1} className="img-fluid rounded-image"/>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </section>
    )
}



export default MajorCarousel