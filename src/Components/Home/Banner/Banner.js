import React from 'react';

import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    {
        url: "https://image.shutterstock.com/image-vector/travel-tourism-background-buying-booking-260nw-1092889481.jpg",
    },
    {
        url: "https://png.pngtree.com/background/20210711/original/pngtree-travel-season-global-travel-banner-picture-image_1118691.jpg",
    },
    {
        url: "https://image.shutterstock.com/image-vector/travel-banner-landmarks-airplane-around-260nw-1025799550.jpg",
    },
    {
        url: "https://media.gettyimages.com/vectors/time-to-travel-banner-vector-id901788120",
    },

];

const Banner = () => {
    return (
        <div>
            <SimpleImageSlider
                style={{ position: "relative" }}
                width={"100%"}
                height={500}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={2.0}
            />

        </div>
    );
};

export default Banner;