import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Experiences from '../Experiences/Experiences';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Experiences />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;