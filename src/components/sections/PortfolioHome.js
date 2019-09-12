import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import {portfolioData} from '../../data/portfolioData';

const renderTile = ({path, link, linkSize, thumbnail}) => {
    const textSize = (linkSize === 'L')? 'label-large' : '';
    const linkClasses = 'label ' + textSize;
    return (
        <div className="gallery-link-container">
            <Link to={path} className="gallery-link">
                <img src={`assets/tiles/${thumbnail}`}
                     className="w3-image" />
            </Link>
        </div>
    );
};

const PortfolioHome = () => {
    return (
        <section className="app-content portfolio-home">

            <div className="portfolio-title">
                <h2 className="project-subheader">Molly Britton</h2>
                <h1 className="project-header">Creative Direction & Design</h1>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.omfBrand)}
                </div>
                <div className="w3-col s6">
                    {renderTile(portfolioData.omfWeb)}
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.omfEmail)}
                </div>
                <div className="w3-col s6">
                    {renderTile(portfolioData.omfMainStreet)}
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.brazilInnovation)}
                </div>
                <div className="w3-col s6">
                    <div className="w3-row">
                        <div className="w3-col s6">
                            {renderTile(portfolioData.backToSchool)}
                        </div>
                        <div className="w3-col s6">
                            {renderTile(portfolioData.hockeyWorld)}
                        </div>
                    </div>
                    <div className="w3-row">
                        <div className="w3-col s6">
                            {renderTile(portfolioData.arris)}
                        </div>
                        <div className="w3-col s6">
                            {renderTile(portfolioData.footwear)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.cogenderUnderwear)}
                </div>
                <div className="w3-col s6">
                    {renderTile(portfolioData.iWill)}
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s4">
                    <div className="w3-row">
                        <div className="w3-col s12">
                            {renderTile(portfolioData.uniforms)}
                        </div>
                        <div className="w3-col s12">
                            {renderTile(portfolioData.euSiteLaunch)}
                        </div>
                    </div>
                </div>
                <div className="w3-col s8">
                    {renderTile(portfolioData.americanGiftGuide)}
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.runWorld)}
                </div>
                <div className="w3-col s6">
                    {renderTile(portfolioData.productStyling)}
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6">
                    {renderTile(portfolioData.euGiftGuide)}
                </div>
                <div className="w3-col s6">
                    {renderTile(portfolioData.paypal)}
                </div>
            </div>

            <Footer/>
        </section>
    );
};

export default PortfolioHome;




