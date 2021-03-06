import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavHeader from './NavHeader';
import PortfolioHome from './sections/PortfolioHome';
import About from './sections/About';
import Gallery from './sections/PortfolioGallery';
import {portfolioData} from '../data/portfolioData';
import OMFBrand from './sections/OMFBrand';
import OMFEmail from './sections/OMFEmail';
import OMFMainStreet from './sections/OMFMainStreet';
import OMFWeb from './sections/OMFWeb';

class App extends Component {

    componentDidMount() {
        const onRouteChange = this.onRouteChange.bind(this);
        window.onhashchange = onRouteChange;
    }

    onRouteChange(){
        // cross-browser scroll to top
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    renderPortfolioRoutes(){
        return Object.values(portfolioData)
            .map((value, index) => {
                const {path, renderer} = value;
                return (
                    <Route key={index} path={path} render={renderer}/>
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
                    {this.renderPortfolioRoutes()}
                </div>
            </div>
        );
    }

};

export default App;