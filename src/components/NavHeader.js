import React from 'react';
import {Link} from 'react-router-dom';
import {portfolioData, DESIGNER_TYPE, DIRECTOR_TYPE} from '../data/portfolioData';


function compareByProp(x1, x2, prop){
	const prop1 = x1[prop];
	const prop2 = x2[prop];
	if(prop1 < prop2){
		return -1;
	}else if(prop1 > prop2){
		return 1;
	}else{
		return 0;
	}
}


export default class NavHeader extends React.Component {
	constructor(props) {
		super(props);

		// init state
		this.state = {
			designDropdownOpen: false,
			directionDropdownOpen: false,
			mobileMenuOpen: false,
			mobileSubMenuType: null
		};

		// bind handlers
		this.toggleDesignDropdown = this.toggleDesignDropdown.bind(this);
		this.toggleDirectionDropdown = this.toggleDirectionDropdown.bind(this);
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
		this.closeAllDropdowns = this.closeAllDropdowns.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);

	}

	componentWillUnmount() {
		this.removeClickOutsideListener();
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const isOpenNow = (this.state.designDropdownOpen || this.state.directionDropdownOpen || this.state.mobileMenuOpen);
		const isOpening = (!isOpenNow && (nextState.designDropdownOpen || nextState.directionDropdownOpen || nextState.mobileMenuOpen));
		const isClosing = (isOpenNow && (!nextState.designDropdownOpen && !nextState.directionDropdownOpen && !nextState.mobileMenuOpen));

		// dropdown is opening - add click outside listener
		if(isOpening){
			this.addClickOutsideListener();
		}

		// dropdown is closing - remove click outside listener
		if(isClosing){
			this.removeClickOutsideListener();
		}
	}

	toggleDesignDropdown(){
		const designDropdownOpen = !this.state.designDropdownOpen;
		this.setState({
			directionDropdownOpen: false,
			mobileMenuOpen: false,
			designDropdownOpen
		});
	}

	toggleDirectionDropdown(){
		const directionDropdownOpen = !this.state.directionDropdownOpen;
		this.setState({
			designDropdownOpen: false,
			mobileMenuOpen: false,
			directionDropdownOpen
		});
	}

	toggleMobileMenu(){
		const mobileMenuOpen = !this.state.mobileMenuOpen;
		this.setState({
			designDropdownOpen: false,
			directionDropdownOpen: false,
			mobileSubMenuType: null,
			mobileMenuOpen
		});
	}

	showMobileMainMenu(){
		this.setState({
			mobileSubMenuType: null
		});
	}

	showMobileSubMenu(type){
		this.setState({
			mobileSubMenuType: type
		});
	}

	addClickOutsideListener(){
		window.addEventListener('click', this.handleClickOutside);
	}

	removeClickOutsideListener(){
		window.removeEventListener('click', this.handleClickOutside);
	}

	handleClickOutside(e){
		if(!this.node.contains(e.target)){
			this.closeAllDropdowns();
		}
	}

	closeAllDropdowns() {
		this.setState({
			designDropdownOpen: false,
			directionDropdownOpen: false,
			mobileMenuOpen: false,
			mobileSubMenuType: null
		});
	}

	createDropdownLink(path, index, link) {
		return (
			<Link to={path} key={index}
			      onClick={this.closeAllDropdowns}
			      className="w3-bar-item w3-button">
				{link}
			</Link>
		);
	}

	renderPortfolioLinks(type) {
		if(!type){
			return null;
		}
		const portfolioItems = Object.values(portfolioData)
			.filter(item => (item.type === type))
			.sort((x1, x2) => compareByProp(x1, x2, 'link'));
		const portfolioLinks = portfolioItems.map((value, index) => {
			const {path, link} = value;
			return this.createDropdownLink(path, index, link);
		});
		return portfolioLinks;
	}

	render() {
		const {
			designDropdownOpen,
			directionDropdownOpen,
			mobileMenuOpen,
			mobileSubMenuType
		} = this.state;

		const designDropdownStyle = (designDropdownOpen)?
			'w3-dropdown-content w3-bar-block w3-card-4 w3-show' : 'w3-dropdown-content w3-bar-block w3-card-4';
		const directionDropdownStyle = (directionDropdownOpen)?
			'w3-dropdown-content w3-bar-block w3-card-4 w3-show' : 'w3-dropdown-content w3-bar-block w3-card-4';
		const mobileMenuStyle = (mobileMenuOpen)?
			'w3-dropdown-content w3-bar-block w3-card-4 w3-show' : 'w3-dropdown-content w3-bar-block w3-card-4';
		const mobileMainMenuStyle = (mobileMenuOpen && !mobileSubMenuType)? 'w3-show' : 'w3-hide';
		const mobileSubMenuStyle = (mobileMenuOpen && mobileSubMenuType)? 'w3-show' : 'w3-hide';

		const mobileSubMenuLabel = (mobileSubMenuType === DIRECTOR_TYPE) ? 'Creative Direction' : 'Design';;

		return (
			<header className="nav-header w3-top"
			        ref={node => this.node = node}>
				<nav className="nav-bar">
					<Link to="/"
					      className="w3-button w3-hide-small">
						Home
					</Link>
					<div className="w3-dropdown-click w3-hide-small">
						<button className="w3-button"
						        onClick={this.toggleDirectionDropdown}>
							Creative Direction <i className="fa fa-caret-down"/>
						</button>
						<div className={directionDropdownStyle}>
							{this.renderPortfolioLinks(DIRECTOR_TYPE)}
						</div>
					</div>
					<div className="w3-dropdown-click w3-hide-small">
						<button className="w3-button"
						        onClick={this.toggleDesignDropdown}>
							Design <i className="fa fa-caret-down"/>
						</button>
						<div className={designDropdownStyle}>
							{this.renderPortfolioLinks(DESIGNER_TYPE)}
						</div>
					</div>

					<div className="w3-dropdown-click w3-hide-medium w3-hide-large mobile-menu">
						<button className="w3-button menu-toggle-button"
						        onClick={this.toggleMobileMenu}>
							<i className="fa fa-bars pull-right"/>
						</button>
						<div className={mobileMenuStyle}>
							<div className={mobileMainMenuStyle}>
								<Link to="/"
								      onClick={this.closeAllDropdowns}
								      className="w3-bar-item w3-button">
									Home
								</Link>
								<a className="w3-bar-item w3-button"
								   onClick={() => this.showMobileSubMenu(DIRECTOR_TYPE)}>
									Creative Direction
									<i className="fa fa-chevron-right pull-right"/>
								</a>
								<a className="w3-bar-item w3-button"
								   onClick={() => this.showMobileSubMenu(DESIGNER_TYPE)}>
									Design
									<i className="fa fa-chevron-right pull-right"/>
								</a>
							</div>

							<div className={mobileSubMenuStyle}>
								<a className="w3-bar-item w3-button submenu-back-button"
								   onClick={() => this.showMobileMainMenu()}>
									<i className="fa fa-chevron-left"/>
									{mobileSubMenuLabel}
								</a>
								{this.renderPortfolioLinks(mobileSubMenuType)}
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
