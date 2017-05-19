import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Footer from '../common/Footer';


const renderGridItems = () => {
    return routes.map(({ title, path, thumb }, index) => {
        return (
            <div key={index} className="w3-third w3-center">
                    <div className="w3-display-container w3-margin-top w3-mobile w3-animate-zoom">
                        <Link to={path} className="gallery-link">
                            <div className="wrapper">
                                <img src={`assets/thumbs/${thumb}`} className="w3-image w3-orange" />
                            </div>
                            <div className="w3-display-middle">
                                <span className="w3-large label">{title}</span>
                            </div>
                        </Link>
                    </div>
            </div>
        );
    });
};

const Home = () => {
    return (
        <section className="w3-content w3-padding-48">
            <div className="w3-row-padding">
                <div className="w3-third">&nbsp;</div>
                <div className="w3-third"><img src="assets/logo.png" className="w3-image"/></div>
                <div className="w3-third">&nbsp;</div>
            </div>
            <div className="w3-row-padding">
                {renderGridItems()}
            </div>
            <Footer/>
        </section>
    );
};

export default Home;




