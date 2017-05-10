import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';


const renderGridItems = () => {
    return routes.map(({ title, path, thumb }, index) => {
        return (
            <div key={index} className="w3-third w3-center">
                <Link to={path}>
                    <div className="w3-card-4 w3-black w3-margin-top w3-mobile w3-animate-zoom">
                        <img src={`assets/thumbs/${thumb}`} className="w3-image" />
                        <div className="w3-container w3-black">
                            <p className="no-wrap">{title}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
};

const Home = () => {
    return (
        <section>
            <div className="w3-row-padding">
                <div className="w3-third">&nbsp;</div>
                <div className="w3-third"><img src="assets/logo.png" className="w3-image"/></div>
                <div className="w3-third">&nbsp;</div>
            </div>
            <div className="w3-row-padding">
                {renderGridItems()}
            </div>
        </section>
    );
};

export default Home;




