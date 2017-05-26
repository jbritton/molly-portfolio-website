import React from 'react';
import { Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import PortfolioHome from './sections/PortfolioHome';
import About from './sections/About';
import Gallery from './sections/Gallery';
import portfolioData from '../data/portfolioData';

const renderPortfolioRoutes = () => {
  return Object.keys(portfolioData)
    .map((key, index) => {
      const {path, title, images} = portfolioData[key];
      return (
        <Route key={index} path={path} render={() => {
          return (
            <Gallery title={title} images={images} />
          );
        }}
        />
      );
    });
};

const App = () => {
  return (
    <div className="w3-display-container">
      <NavHeader />
      <div className="main-content">
        <Route exact path="/" component={PortfolioHome} />
        <Route path="/about" component={About} />
        { renderPortfolioRoutes() }
      </div>
    </div>
  );
};

export default App;