import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';

class Gallery extends React.Component {

	constructor(props) {
		super(props);

		// init state
		this.state = {
			title: props.title,
			subtitle: props.subtitle || '',
			images: props.images,
			currentIndex: 0,
			direction: 0
		};

		// bind event handlers
		this.nextImage = this.nextImage.bind(this);
		this.previousImage = this.previousImage.bind(this);
		this.goToImage = this.goToImage.bind(this);
	}

	componentDidMount() {
		this.preloadImages();
		this.scrollToTop();
	}

	componentDidUpdate() {
		this.scrollToTop();
	}

// TODO: fix this functionality
	scrollToTop(){
		this.appContent.scrollTop = 0;
	}

	getImagePath(image) {
		return `assets/full/${image}`;
	}

	preloadImages() {
		if (this.state.images.length > 0) {
			const preloaded = this.state.images.map((image) => {
				let preloadedImage = new Image();
				preloadedImage.src = this.getImagePath(image);
			}, this);
		}
	}

	nextImage() {
		let index = this.state.currentIndex + 1;
		index = (index < this.state.images.length) ? index : 0;
		this.setState({currentIndex: index, direction: 1});
	}

	previousImage() {
		let index = this.state.currentIndex - 1;
		index = (index >= 0) ? index : this.state.images.length - 1;
		this.setState({currentIndex: index, direction: -1});
	}

	goToImage(index) {
		this.setState({currentIndex: index, direction: 0});
	}

	renderNavLinks() {
		return this.state.images.map((image, index) => {
			const displayIndex = index + 1;
			const activeClass = (this.state.currentIndex === index) ? 'w3-black' : 'w3-light-gray';
			const classNames = 'w3-tag w3-border w3-border-gray w3-hover-black w3-opacity-min ' + activeClass;
			return (
				<button key={index} className={classNames}
				        onClick={() => {
					        this.goToImage(index);
				        }}>
					{displayIndex}
				</button>
			);
		});
	}

	renderNavControls() {
		if (this.state.images && this.state.images.length > 1) {
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
			<img src={this.getImagePath(image)}
			     className="w3-image w3-animate-opacity"/>
		);
	}

	render() {
		return (
			<section className="app-content" ref={(element) => { this.appContent = element; }}>
				<div className="gallery-viewport w3-center">
					<div className="gallery-header">
						<h5>{this.state.title}</h5>
						<span>{this.state.subtitle}</span>
					</div>
					<div className="w3-white">
						{this.renderGalleryImage()}
					</div>
				</div>
				{this.renderNavControls()}
				<div className="w3-display-bottommiddle w3-bar w3-padding-16 w3-center">
					{this.renderNavLinks()}
				</div>
				<Footer/>
			</section>
		);
	}
}

Gallery.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	images: PropTypes.array.isRequired
};

export default Gallery;
