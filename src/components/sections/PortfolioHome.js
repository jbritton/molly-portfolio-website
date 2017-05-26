import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import portfolioData from '../../data/portfolioData';

const renderTile = ({path, title, thumbnail}) => {
  return (
    <div className="w3-display-container w3-animate-opacity">
      <Link to={path} className="gallery-link">
        <div className="wrapper">
          <img src={`assets/thumbnails/${thumbnail}`}
               className="w3-image" />
        </div>
        <div className="w3-display-middle w3-center">
          <span className="w3-large label">{title}</span>
        </div>
      </Link>
    </div>
  );
};

const PortfolioHome = () => {
  return (
    <section className="w3-content">
      <div className="w3-row-padding" style={{'margin-bottom': '40px'}}>
        <div className="w3-third">&nbsp;</div>
        <div className="w3-third">
          <img src="assets/logo.png" className="w3-image" />
        </div>
        <div className="w3-third">&nbsp;</div>
      </div>

      <div className="w3-row">
        <div className="w3-col s5 w3-yellow">
          {renderTile(portfolioData['brazil-innovation'])}
        </div>
        <div className="w3-col s7">
          <div className="w3-row">
            <div className="w3-col s6 w3-red">
              {renderTile(portfolioData['back-to-school'])}
            </div>
            <div className="w3-col s6 w3-blue">
              {renderTile(portfolioData['hockey-world'])}
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col s6 w3-purple">
              {renderTile(portfolioData['arris'])}
            </div>
            <div className="w3-col s6 w3-dark-gray">
              {renderTile(portfolioData['footwear'])}
            </div>
          </div>
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s7">
          {renderTile(portfolioData['cogender-underwear'])}
        </div>
        <div className="w3-col s5">
          {renderTile(portfolioData['i-will'])}
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s5">
          <div className="w3-row">
            <div className="w3-col s12">
              {renderTile(portfolioData['uniforms'])}
            </div>
            <div className="w3-col s12">
              {renderTile(portfolioData['eu-site-launch'])}
            </div>
          </div>
        </div>
        <div className="w3-col s7">
          {renderTile(portfolioData['american-gift-guide'])}
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s6">
          {renderTile(portfolioData['run-world'])}
        </div>
        <div className="w3-col s6">
          {renderTile(portfolioData['emails'])}
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s6">
          {renderTile(portfolioData['eu-gift-guide'])}
        </div>
        <div className="w3-col s6">
          {renderTile(portfolioData['paypal-print'])}
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default PortfolioHome;




