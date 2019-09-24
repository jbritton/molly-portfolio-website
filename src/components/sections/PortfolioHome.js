import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import {portfolioData} from '../../data/portfolioData';

const renderTile = ({path, link, linkSize, thumbnail}) => {
    return (
        <Link to={path} className="portfolio-link">
            <img src={`assets/tiles/${thumbnail}`} />
        </Link>
    );
};

const PortfolioHome = () => {
    return (
        <section className="app-content portfolio-home w3-animate-opacity">

            <div className="portfolio-title">
                <h2 className="project-subheader">Molly Britton</h2>
                <h1 className="project-header">Creative Direction & Design</h1>
            </div>

            <div className="portfolio-grid">
                <div className="grid-a">
                    {renderTile(portfolioData.omfBrand)}
                </div>
                <div className="grid-b">
                    {renderTile(portfolioData.omfWeb)}
                </div>
                <div className="grid-c">
                    {renderTile(portfolioData.omfEmail)}
                </div>
                <div className="grid-d">
                    {renderTile(portfolioData.omfMainStreet)}
                </div>
                <div className="grid-e">
                    {renderTile(portfolioData.brazilInnovation)}
                </div>
                <div className="grid-f">
                    {renderTile(portfolioData.backToSchool)}
                </div>
                <div className="grid-g">
                    {renderTile(portfolioData.hockeyWorld)}
                </div>
                <div className="grid-h">
                    {renderTile(portfolioData.arris)}
                </div>
                <div className="grid-i">
                    {renderTile(portfolioData.footwear)}
                </div>
                <div className="grid-j">
                    {renderTile(portfolioData.cogenderUnderwear)}
                </div>
                <div className="grid-k">
                    {renderTile(portfolioData.iWill)}
                </div>
                <div className="grid-l">
                    {renderTile(portfolioData.uniforms)}
                </div>
                <div className="grid-m">
                    {renderTile(portfolioData.euSiteLaunch)}
                </div>
                <div className="grid-n">
                    {renderTile(portfolioData.americanGiftGuide)}
                </div>
                <div className="grid-o">
                    {renderTile(portfolioData.runWorld)}
                </div>
                <div className="grid-p">
                    {renderTile(portfolioData.productStyling)}
                </div>
                <div className="grid-q">
                    {renderTile(portfolioData.euGiftGuide)}
                </div>
                <div className="grid-r">
                    {renderTile(portfolioData.paypal)}
                </div>
            </div>

            <Footer/>
        </section>
    );
};

export default PortfolioHome;




