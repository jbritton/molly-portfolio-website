import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';


function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
}


class PortfolioGallery extends React.Component {

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
	}

	getImagePath(image) {
		return `assets/full/${image}`;
	}

	preloadImages() {
		const images = flatten(this.state.images);

		if (images.length > 0) {
			const preloaded = images.map((image) => {
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

	renderPagingControls() {
		if (this.state.images && this.state.images.length > 1) {

			const renderPagingButton = (image, index) => {
				const displayIndex = index + 1;
				const activeClass = (this.state.currentIndex === index) ? 'w3-blue' : 'w3-black';
				const classNames = 'w3-button w3-hover-blue ' + activeClass;
				return (
					<button key={index} className={classNames}
					        onClick={() => {
						        this.goToImage(index);
					        }}>
						{displayIndex}
					</button>
				);
			};

			return (
				<div className="gallery-paging-controls">
					{this.state.images.map(renderPagingButton)}
				</div>
			);

		}else{
			return null;
		}
	}

	renderPreviousControl(){
		if (this.state.images && this.state.images.length > 1) {
			return (
				<button className="w3-button w3-circle w3-black w3-hover-blue gallery-scroll gallery-scroll-prev"
				        onClick={this.previousImage}>
					<i className="fa fa-chevron-left"></i>
				</button>

			);
		}else{
			return null;
		}
	}

	renderNextControl(){
		if (this.state.images && this.state.images.length > 1) {
			return (
				<div className="gallery-scrolling-controls">

					<button className="w3-button w3-circle w3-black w3-hover-blue gallery-scroll gallery-scroll-next"
					        onClick={this.nextImage}>
						<i className="fa fa-chevron-right"></i>
					</button>
				</div>
			);
		}else{
			return null;
		}
	}

	renderGallerySection() {
		const gallerySection = this.state.images[this.state.currentIndex];
		const images = (Array.isArray(gallerySection))? gallerySection : [ gallerySection ];
		return images.map(image => {
			return (
				<img src={this.getImagePath(image)}
				     className="w3-image w3-animate-opacity"/>
			);
		});
	}

	render() {
		return (
			<section className="app-content portfolio-gallery"
			         ref={(element) => { this.appContent = element; }}>
				<div className="gallery-viewport w3-center">
					<h2 className="project-subheader">{this.state.subtitle}</h2>
					<h1 className="project-header">{this.state.title}</h1>
					<div className="w3-white">
						{this.renderGallerySection()}
					</div>
				</div>

				{this.renderPreviousControl()}
				{this.renderNextControl()}
				{this.renderPagingControls()}



				{/*{this.renderNavControls()}*/}
				{/*<div className="w3-display-bottommiddle w3-bar w3-padding-16 w3-center">*/}
					{/*{this.renderNavLinks()}*/}
				{/*</div>*/}


				<Footer/>
			</section>
		);
	}
}

PortfolioGallery.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	images: PropTypes.array.isRequired
};

export default PortfolioGallery;
