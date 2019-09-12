import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';

class StackedGallery extends React.Component {

	constructor(props) {
		super(props);

		// init state
		this.state = {
			title: props.title,
			subtitle: props.subtitle || '',
			images: props.images
		};

	}

	componentDidMount() {
		this.preloadImages();
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

	renderGalleryImages() {
		return this.state.images.map(image => {
			<img src={this.getImagePath(image)}
			     className="w3-image w3-animate-opacity" />
		});
	}

	render() {
		return (
			<section className="app-content portfolio-gallery">
				<div className="gallery-viewport w3-center">
					<h2 className="project-subheader">{this.state.subtitle}</h2>
					<h1 className="project-header">{this.state.title}</h1>
					<div className="w3-white">
						{this.renderGalleryImages()}
					</div>
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

export default StackedGallery;
