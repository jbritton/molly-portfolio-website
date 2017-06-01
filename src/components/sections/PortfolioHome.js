import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import portfolioData from '../../data/portfolioData';

const renderTile = ({path, title, thumbnail}) => {
  return (
    <div className="w3-display-container w3-animate-opacity">
      <Link to={path} className="gallery-link">
        <img src={`assets/tiles/${thumbnail}`}
             className="w3-image" />
        <div className="w3-display-middle w3-center">
          <span className="w3-large label">{title}</span>
        </div>
      </Link>
    </div>
  );
};

const PortfolioHome = () => {
  return (
    <section className="app-content">
      <div className="w3-row" style={{'marginBottom': '40px'}}>
        <div className="w3-col s4">&nbsp;</div>
        <div className="w3-col s4">
          <img src="assets/logo.png" className="w3-image" />
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s6">
          {renderTile(portfolioData['brazil-innovation'])}
        </div>
        <div className="w3-col s6">
          <div className="w3-row">
            <div className="w3-col s6">
              {renderTile(portfolioData['back-to-school'])}
            </div>
            <div className="w3-col s6">
              {renderTile(portfolioData['hockey-world'])}
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col s6">
              {renderTile(portfolioData['arris'])}
            </div>
            <div className="w3-col s6">
              {renderTile(portfolioData['footwear'])}
            </div>
          </div>
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s6">
          {renderTile(portfolioData['cogender-underwear'])}
        </div>
        <div className="w3-col s6">
          {renderTile(portfolioData['i-will'])}
        </div>
      </div>

      <div className="w3-row">
        <div className="w3-col s4">
          <div className="w3-row">
            <div className="w3-col s12">
              {renderTile(portfolioData['uniforms'])}
            </div>
            <div className="w3-col s12">
              {renderTile(portfolioData['eu-site-launch'])}
            </div>
          </div>
        </div>
        <div className="w3-col s8">
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
          {renderTile(portfolioData['paypal'])}
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default PortfolioHome;




