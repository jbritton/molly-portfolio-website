import React from 'react';
import PropTypes from 'prop-types';

class Gallery extends React.Component {

    constructor(props) {
        super(props);

        // constants
        this.DELAY = 500;

        // init state
        this.state = {
            title: props.title,
            images: props.images,
            currentIndex: 0
        };

        // bind event handlers
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.goToImage = this.goToImage.bind(this);
    }

    scrollToTop(){
        this.topAnchor.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        window.scrollTo(0, 0);
    }

    nextImage(){
        this.scrollToTop();

        // defer execution until scrolling completes
        setTimeout(() => {
            let index = this.state.currentIndex + 1;
            index = (index < this.state.images.length)? index : 0;
            this.setState({currentIndex: index});
        }, this.DELAY);
    }

    previousImage(){
        this.scrollToTop();

        // defer execution until scrolling completes
        setTimeout(() => {
            let index = this.state.currentIndex - 1;
            index = (index >= 0)? index : this.state.images.length - 1;
            this.setState({currentIndex: index});
        }, this.DELAY);
    }

    goToImage(index){
        this.scrollToTop();

        // defer execution until scrolling completes
        setTimeout(() => {
            this.setState({currentIndex: index});
        }, this.DELAY);
    }

    render() {
        const image = this.state.images[this.state.currentIndex];

        return (
            <section className="w3-center">
                <h3>{this.state.title}</h3>
                <div className="w3-card-4 w3-animate-zoom">
                    <div className="container-scrollable w3-border-black w3-border-top w3-border-right w3-border-left">
                        <div ref={(element) => { this.topAnchor = element; }} />
                        <img src={`assets/full/${image}`} className="w3-image" />
                    </div>
                    <div className="w3-center w3-container w3-padding w3-large w3-black">
                        <div className="w3-left w3-hover-text-khaki cursor-pointer"
                             onClick={this.previousImage}>&#10094;</div>
                        <div className="w3-right w3-hover-text-khaki cursor-pointer"
                             onClick={this.nextImage}>&#10095;</div>
                        {/*<span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.goToImage}></span>*/}
                        {/*<span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.goToImage}></span>*/}
                        {/*<span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={this.goToImage}></span>*/}
                    </div>
                </div>
            </section>
        );
    }
}

Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
};

export default Gallery;