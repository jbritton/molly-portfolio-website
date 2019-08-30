import React from 'react';
import Gallery from '../components/sections/Gallery';
import OMFBrand from '../components/sections/OMFBrand';
import OMFEmail from '../components/sections/OMFEmail';
import OMFMainStreet from '../components/sections/OMFMainStreet';
import OMFWeb from '../components/sections/OMFWeb';

export const DESIGNER_TYPE = 'designer';
export const DIRECTOR_TYPE = 'director';

export const portfolioData = {
	americanGiftGuide: {
		type: DESIGNER_TYPE,
		path: '/na-gift-guide',
		link: 'American Gift Guide',
		thumbnail: 'PORTFOLIO_TILES_09.jpg',
		renderer: () => {
			const title = 'North America Gift Guide, 2015';
			const subtitle = 'Photography Art Director, Designer';
			const images = ['Portfolio_Holiday_0.jpg', 'Portfolio_Holiday_2.jpg', 'Portfolio_Holiday_1.jpg', 'Portfolio_Holiday_3.jpg', 'Portfolio_Holiday_4.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	arris: {
		type: DESIGNER_TYPE,
		path: '/arris',
		link: 'Arris Project',
		thumbnail: 'PORTFOLIO_TILES_04.jpg',
		renderer: () => {
			const title = 'Arris Project, First Baltimore Crafted Collection';
			const subtitle = 'Photography Art Director, Lead Designer';
			const images = ['Portfolio_Arris.jpg', 'Portfolio_Arris_Email.jpg', 'Portfolio_iPhone_Arris.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	brazilInnovation: {
		type: DESIGNER_TYPE,
		path: '/innovation',
		link: 'Brazil Innovation',
		thumbnail: 'PORTFOLIO_TILES_01.jpg',
		renderer: () => {
			const title = 'Brazil Innovation Pages Design, 2014';
			const subtitle = 'Lead UX and Visual Designer (Live Text Design with Parallax';
			const images = ['Portfolio_Brazil_Innovation_2.jpg', 'Portfolio_Brazil_Innovation_3.jpg', 'Portfolio_Brazil_Innovation_4.jpg', 'Portfolio_Brazil_Innovation_1.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	iWill: {
		type: DESIGNER_TYPE,
		path: '/i-will',
		link: 'I Will What I Want',
		thumbnail: 'PORTFOLIO_TILES_07.jpg',
		renderer: () => {
			const title = 'I Will What I Want Landing Page';
			const subtitle = 'Photography Art Director, Designer';
			const images = ['Portfolio_IWWIW.jpg', 'Portfolio_iPhone_IWWIW.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	hockeyWorld: {
		type: DESIGNER_TYPE,
		path: '/hockey-world',
		link: 'Hockey World',
		thumbnail: 'PORTFOLIO_TILES_03.jpg',
		renderer: () => {
			const title = 'Hockey World Landing Page';
			const subtitle = 'Designer';
			const images = ['Portfolio_Hockey.jpg', 'Portfolio_iPhone_Hockey.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	backToSchool: {
		type: DESIGNER_TYPE,
		path: '/back-to-school',
		link: 'Back To School',
		thumbnail: 'PORTFOLIO_TILES_02.jpg',
		renderer: () => {
			const title = 'Back To School Landing Pages';
			const subtitle = 'Photography Art Director, Designer';
			const images = ['Portfolio_Backpacks_1.jpg', 'Portfolio_Backpacks_2.jpg', 'Portfolio_Backpacks_3.jpg', 'Portfolio_Backpacks_4.jpg', 'Portfolio_iPhone_Backpacks.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	euSiteLaunch: {
		type: DESIGNER_TYPE,
		path: '/eu-site-launch',
		link: 'EU Site Launch',
		thumbnail: 'PORTFOLIO_TILES_10.jpg',
		renderer: () => {
			const title = 'EU Site Design Launch, 2014';
			const subtitle = 'Lead UX and Visual Designer';
			const images = ['Portfolio_HP_2.jpg', 'Portfolio_HP_1.jpg', 'Portfolio_HP_3.jpg', 'Portfolio_iPhone_HP_MB.jpg', 'Portfolio_iPhone_HP_MB_UK.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	euGiftGuide: {
		type: DESIGNER_TYPE,
		path: '/eu-gift-guide',
		link: 'EU Gift Guide',
		thumbnail: 'PORTFOLIO_TILES_13.jpg',
		renderer: () => {
			const title = 'First EU Gift Guide, 2014';
			const subtitle = 'Photography Art Director, Lead UX and Visual Designer';
			const images = ['Portfolio_GiftGuide_1.jpg', 'Portfolio_GiftGuide_2.jpg', 'Portfolio_GiftGuide_3.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	paypal: {
		type: DESIGNER_TYPE,
		path: '/paypal',
		link: 'Paypal',
		thumbnail: 'PORTFOLIO_TILES_14.jpg',
		renderer: () => {
			const title = 'PayPal Print Design';
			const subtitle = 'Visual Designer';
			const images = ['Portfolio_PayPal.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	uniforms: {
		type: DESIGNER_TYPE,
		path: '/uniforms',
		link: 'Uniforms',
		thumbnail: 'PORTFOLIO_TILES_08.jpg',
		renderer: () => {
			const title = 'School Uniforms Landing Page';
			const subtitle = 'Photography Art Director, Designer';
			const images = ['Portfolio_Uniforms.jpg', 'Portfolio_iPhone_Uniforms.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	footwear: {
		type: DESIGNER_TYPE,
		path: '/footwear',
		link: 'Footwear',
		thumbnail: 'PORTFOLIO_TILES_05.jpg',
		renderer: () => {
			const title = 'Footwear Landing Pages and Email Assets';
			const subtitle = 'Lead Designer';
			const images = ['Portfolio_Spectrum_3.jpg', 'Portfolio_Spectrum_1.jpg', 'Portfolio_Spectrum_2.jpg', 'Portfolio_Spectrum_Email.jpg', 'Portfolio_Spectrum_Gemini_Email.jpg', 'Portfolio_iPhone_spectrum.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	cogenderUnderwear: {
		type: DESIGNER_TYPE,
		path: '/cogender-underwear',
		link: 'Cogender Underwear',
		thumbnail: 'PORTFOLIO_TILES_06.jpg',
		renderer: () => {
			const title = 'Co-Gender Underwear Site';
			const subtitle = 'Photography Art Director, Lead Designer';
			const images = ['Portfolio_Underwear.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	runWorld: {
		type: DESIGNER_TYPE,
		path: '/run-world',
		link: 'Run World',
		thumbnail: 'PORTFOLIO_TILES_11.jpg',
		renderer: () => {
			const title = 'Run World Landing Pages';
			const subtitle = 'Photography Art Director, Designer';
			const images = ['Portfolio_Run_1.jpg', 'Portfolio_Run_2.jpg', 'Portfolio_Run_4.jpg', 'Portfolio_Run_3.jpg', 'Portfolio_iPhone_Run.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	productStyling: {
		type: DESIGNER_TYPE,
		path: '/product-styling',
		link: 'Product Styling',
		thumbnail: 'PORTFOLIO_TILES_12.jpg',
		renderer: () => {
			const title = 'Product Styling and Email Marketing';
			const subtitle = 'Photography Art Director, Lead Designer';
			const images = ['Portfolio_Emails_1.jpg', 'Portfolio_Emails_2.jpg'];
			return (
				<Gallery title={title}
				         subtitle={subtitle}
				         images={images}
				/>
			);
		}
	},
	omfBrand: {
		type: DIRECTOR_TYPE,
		link: 'One Main Brand',
		path: '/omf-brand',
		thumbnail: 'PORTFOLIO_TILES_BRAND.jpg',
		renderer: () => <OMFBrand/>
	},
	omfEmail: {
		type: DIRECTOR_TYPE,
		link: 'One Main Email',
		path: '/omf-email',
		thumbnail: 'PORTFOLIO_TILES_EMAIL.jpg',
		renderer: () => <OMFEmail/>
	},
	omfMainStreet: {
		type: DIRECTOR_TYPE,
		link: 'One Main MOMS',
		path: '/omf-main-street',
		thumbnail: 'PORTFOLIO_TILES_MOMS.jpg',
		renderer: () => <OMFMainStreet/>
	},
	omfWeb: {
		type: DIRECTOR_TYPE,
		link: 'One Main Web',
		path: '/omf-web',
		thumbnail: 'PORTFOLIO_TILES_WEB.jpg',
		renderer: () => <OMFWeb/>
	}
};
