import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';

class Gallery extends React.Component {

    constructor(props) {
        super(props);

        // constants
        this.SCROLL_DELAY = 100;

        // init state
        this.state = {
            title: props.title,
            images: props.images,
            currentIndex: 0,
            direction: 0
        };

        // bind event handlers
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.goToImage = this.goToImage.bind(this);
    }

    componentDidUpdate(){
        setTimeout(() => this.scrollToTop(), this.SCROLL_DELAY);
    }

    scrollToTop(){
        this.topAnchor.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        window.scrollTo(0, 0);
    }

    nextImage(){
        let index = this.state.currentIndex + 1;
        index = (index < this.state.images.length)? index : 0;
        this.setState({currentIndex: index, direction: 1});
    }

    previousImage(){
        let index = this.state.currentIndex - 1;
        index = (index >= 0)? index : this.state.images.length - 1;
        this.setState({currentIndex: index, direction: -1});
    }

    goToImage(index){
        this.setState({currentIndex: index, direction: 0});
    }

    renderNavLinks() {
        return this.state.images.map((image, index) => {
            const displayIndex = index + 1;
            const activeClass = (this.state.currentIndex === index)? 'w3-black' : 'w3-light-gray';
            const classNames = 'w3-tag w3-border w3-border-gray w3-hover-black w3-opacity-min ' + activeClass;
            return (
                <button key={index} className={classNames}
                      onClick={() => { this.goToImage(index); }}>
                    {displayIndex}
                </button>
            );
        });
    }

    renderNavControls(){
        if(this.state.images && this.state.images.length > 1){
            return (
                <div className="w3-xxlarge w3-opacity-min">
                    <button className="w3-button w3-display-left"
                            onClick={this.previousImage}>
                        &#10094;
                    </button>
                    <button className="w3-button w3-display-right"
                            onClick={this.nextImage}>
                        &#10095;
                    </button>
                </div>
            );
        }
        return null;
    }

    renderGalleryImage() {
        const image = this.state.images[this.state.currentIndex];
        return (
            <img src={`assets/full/${image}`}
                 className="w3-image w3-animate-opacity" />
        );
    }

    render() {
        return (
          <section className="w3-content">
              <div className="gallery-viewport w3-center">
                  <div ref={(element) => { this.topAnchor = element; }} />
                  <div className="gallery-header">
                      <h5>{this.state.title}</h5>
                      <span>Lorem Ipsum</span>
                  </div>

                  <div className="w3-white">
                    {this.renderGalleryImage()}
                  </div>
              </div>
              {this.renderNavControls()}
              <div className="w3-display-bottommiddle w3-bar w3-padding-16 w3-center">
                {this.renderNavLinks()}
              </div>
              <Footer />
          </section>
        );
    }
}

Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
};

export default Gallery;