import React from 'react';
import { Route } from 'react-router-dom';
import Home from './sections/Home';
import About from './sections/About';
import Gallery from './sections/Gallery';
import routes from '../routes';

const renderGallerySections = () => {
  return routes.map(({ path, title, images }, index) => {
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

const MainContent = () => {
  return (
    <div className="main-content">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      { renderGallerySections() }
    </div>
  );
};

export default MainContent;