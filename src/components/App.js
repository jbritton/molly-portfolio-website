import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import PortfolioHome from './sections/PortfolioHome';
import About from './sections/About';
import Gallery from './sections/Gallery';
import portfolioData from '../data/portfolioData';
import OMFBrand from './sections/OMFBrand';
import OMFEmail from './sections/OMFEmail';
import OMFMainStreet from './sections/OMFMainStreet';
import OMFWeb from './sections/OMFWeb';

class App extends Component {

  componentDidUpdate(){
    this.scrollToTop();
  }

  scrollToTop(){
    this.mainContent.scrollTop = 0;
  }

  renderRoutes(){
    const clickHandler = this.scrollToTop.bind(this);

    return Object.keys(portfolioData)
      .map((key, index) => {
        const {path, title, subtitle, images} = portfolioData[key];
        return (
          <Route key={index} path={path} render={() => {
            return (
              <Gallery title={title}
                       subtitle={subtitle}
                       images={images}
                       onChange={clickHandler}
              />
            );
          }}
          />
        );
      });
  }

  render(){
    return (
      <div className="w3-display-container">
        <NavHeader />
        <div className="main-content" ref={(element) => { this.mainContent = element; }}>
          <Route exact path="/" component={PortfolioHome} />
          {/*<Route path="/about" component={About} />*/}
          <Route path="/omf-brand" component={OMFBrand} />
          <Route path="/omf-email" component={OMFEmail} />
          <Route path="/omf-moms" component={OMFMainStreet} />
          <Route path="/omf-web" component={OMFWeb} />
          {this.renderRoutes()}
        </div>
      </div>
    );
  }

};

export default App;