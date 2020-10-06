import React from 'react';
import slide from '../../assets/slide1.jpg';
const MajorCarousel = () =>{
    return(
        <section>
            <div className="major dtop bg-white container-fluid">
                <div className="carousel" style={{paddingBottom: "5%",paddingTop: "5%"}} data-flickity>
                    <div class="carousel-cell">
                        <img src={slide} alt="" className="img-fluid rounded-image-full" />
                    </div>
                    <div class="carousel-cell">
                        <img src={slide} alt="" className="img-fluid rounded-image-full" />
                    </div>
                    <div class="carousel-cell">
                        <img src={slide} alt="" className="img-fluid rounded-image-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MajorCarousel