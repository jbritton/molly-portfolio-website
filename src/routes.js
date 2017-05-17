
const routes = [
    {
        path: '/na-gift-guide',
        thumb: 'GIFTGUIDE_THUMB.jpg',
        title: 'American Gift Guide',
        images: [
            'Portfolio_Holiday_0.jpg',
            'Portfolio_Holiday_1.jpg',
            'Portfolio_Holiday_2.jpg',
            'Portfolio_Holiday_3.jpg',
            'Portfolio_Holiday_4.jpg'
        ]
    },
    {
        path: '/arris',
        thumb: 'ARRIS_THUMB.jpg',
        title: 'Arris Project',
        images: [
            'Portfolio_iPhone_Arris.png',
            'Portfolio_Arris.jpg'
        ]
    },
    {
        path: '/innovation',
        thumb: 'BRAZIL_THUMB.jpg',
        title: 'Brazil Innovation',
        images: [
            'Portfolio_Brazil_Innovation_1.jpg',
            'Portfolio_Brazil_Innovation_2.jpg',
            'Portfolio_Brazil_Innovation_3.jpg',
            'Portfolio_Brazil_Innovation_4.jpg'
        ]
    },
    {
        path: '/i-will',
        thumb: 'IWWIW_THUMB.jpg',
        title: 'I Will What I Want',
        images: [
            'Portfolio_iPhone_IWWIW.png',
            'Portfolio_IWWIW.jpg'
        ]
    },
    {
        path: '/hockey-world',
        thumb: 'HOCKEY_THUMB.jpg',
        title: 'Hockey World',
        images: [
            'Portfolio_iPhone_Hockey.png',
            'Portfolio_Hockey.jpg'
        ]
    },
    {
        path: '/back-to-school',
        thumb: 'BACKPACKS_THUMB.jpg',
        title: 'Back To School',
        images: [
            'Portfolio_iPhone_Backpacks.png',
            'Portfolio_Backpacks_1.jpg',
            'Portfolio_Backpacks_2.jpg',
            'Portfolio_Backpacks_3.jpg',
            'Portfolio_Backpacks_4.jpg'
        ]
    },
    {
        path: '/eu-site-launch',
        thumb: 'INTL_HP_THUMB.jpg',
        title: 'EU Site Launch',
        images: [
            'Portfolio_iPhone_HP_MB.png',
            'Portfolio_iPhone_HP_MB_UK.png',
            'Portfolio_HP_1.jpg',
            'Portfolio_HP_2.jpg',
            'Portfolio_HP_3.jpg'

        ]
    },
    {
        path: '/eu-gift-guide',
        thumb: 'INTL_GG_THUMB.jpg',
        title: 'EU Gift Guide',
        images: [
            'Portfolio_GiftGuide_1.jpg',
            'Portfolio_GiftGuide_2.jpg',
            'Portfolio_GiftGuide_3.jpg'
        ]
    },
    {
        path: '/paypal-print',
        thumb: 'PP_THUMB.jpg',
        title: 'Paypal Print',
        images: [
            'Portfolio_PayPal.png'
        ]
    },
    {
        path: '/uniforms',
        thumb: 'UNIFORMS_THUMB.jpg',
        title: 'Uniforms',
        images: [
            'Portfolio_iPhone_Uniforms.png',
            'Portfolio_Uniforms.jpg'
        ]
    },
    {
        path: '/footwear',
        thumb: 'SPECTRUM_THUMB.jpg',
        title: 'Footwear',
        images: [
            'Portfolio_iPhone_spectrum.png',
            'Portfolio_Spectrum_1.jpg',
            'Portfolio_Spectrum_2.jpg',
            'Portfolio_Spectrum_3.jpg',
            'Portfolio_Spectrum_Email.jpg',
            'Portfolio_Spectrum_Gemini_Email.jpg'
        ]
    },
    {
        path: '/cogender-underwear',
        thumb: 'UNDIES_THUMB.jpg',
        title: 'Cogender Underwear',
        images: [
            'Portfolio_Underwear_1.jpg',
            'Portfolio_Underwear_2.jpg',
            'Portfolio_Underwear_3.jpg',
            'Portfolio_Underwear_4.jpg',
            'Portfolio_Underwear_5.jpg',
            'Portfolio_Underwear_6.jpg'
        ]
    },
    {
        path: '/post-purchase',
        thumb: 'POSTPURCHASE_THUMB.jpg',
        title: 'Post Purchase',
        images: [
            'Portfolio_iPhone_PostPurchase.png',
            'Portfolio_PostPurchase_2.jpg',
            'Portfolio_PostPurchase_3.jpg',
            'Portfolio_PostPurchase_5.jpg',
            'Portfolio_PostPurchase_6.jpg',
            'Portfolio_PostPurchase_4.jpg',
            'Portfolio_PostPurchase_1.jpg'
        ]
    },
    {
        path: '/run-world',
        thumb: 'RUN_THUMB.jpg',
        title: 'Run World',
        images: [
            'Portfolio_iPhone_Run.png',
            'Portfolio_Run_1.jpg',
            'Portfolio_Run_2.jpg'
        ]
    },
    {
        path: '/tbd',
        thumb: 'PLACEHOLDER_THUMB.jpg',
        title: 'TBD',
        images: []
    }
];

routes.sort(function(x, y){
    if(x.title < y.title){
        return -1;
    }else if(x.title > y.title){
        return 1
    }else{
        return 0;
    }
});

export default routes;