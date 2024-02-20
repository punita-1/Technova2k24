import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../carousel.css'

export default function CarouselComponent(props) {
    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} interval={2000} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img className="Crousel_img" src={`${process.env.PUBLIC_URL}/images/SAVE_20240213_175023.jpg`} />
                </div>
                <div>
                    <img className="Crousel_img" src={`${process.env.PUBLIC_URL}/images/vc_pic.jpg`} />
                </div>
                <div>
                    <img className="Crousel_img" src={`${process.env.PUBLIC_URL}/images/SAVE_20240213_175013.jpg`} />
                </div>
            </Carousel>
        </div>
    );
}
