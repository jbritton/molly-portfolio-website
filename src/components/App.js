import React from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Gallery from './sections/Gallery';
import routes from '../routes';

const renderGalleryRoutes = () => {
    return routes.map(({ path, title, images }, index) => {
        return (
            <Route key={index} path={path} render={() => {
                console.log(`Render ${title}`);
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
        <section>
            <Header />
            <section className="main">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                { renderGalleryRoutes() }
            </section>
            {/*<Footer/>*/}
        </section>
    );
};

export default App;