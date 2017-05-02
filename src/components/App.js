import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavMenu from './common/NavMenu';
import Footer from './common/Footer';
import PortfolioHome from './sections/PortfolioHome';
import About from './sections/About';
import routes from '../routes';

const renderSectionRoutes = () => {
    return routes.map(({ path, component }, index) => {
        return (
            <Route key={index} path={path} component={component} />
        );
    });
};

const App = () => {
    return (
        <div>
            <NavMenu/>
            <section className="main-content">
                <Route exact path="/" component={PortfolioHome} />
                <Route path="/about" component={About} />
                { renderSectionRoutes() }
            </section>
            <Footer/>
        </div>
    );
};

export default App;