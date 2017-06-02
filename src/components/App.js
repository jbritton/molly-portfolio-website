import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import PortfolioHome from './sections/PortfolioHome';
import About from './sections/About';
import Gallery from './sections/Gallery';
import portfolioData from '../data/portfolioData';

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
          <Route path="/about" component={About} />
          {this.renderRoutes()}
        </div>
      </div>
    );
  }

};

export default App;