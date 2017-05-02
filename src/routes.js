import Arris from './components/sections/Arris';
import BackToSchool from './components/sections/BackToSchool';
import BrazilInnovation from './components/sections/BrazilInnovation';
import CogenderUnderwear from './components/sections/CogenderUnderwear';
import EUGiftGuide from './components/sections/EUGiftGuide';
import EUSite from './components/sections/EUSite';
import Footwear from './components/sections/Footwear';
import HockeyWorld from './components/sections/HockeyWorld';
import IWill from './components/sections/IWill';
import NAGiftGuide from './components/sections/NAGiftGuide';
import PaypalPrint from './components/sections/PaypalPrint';
import PostPurchase from './components/sections/PostPurchase';
import RunWorld from './components/sections/RunWorld';
import TBD from './components/sections/TBD';
import Uniforms from './components/sections/Uniforms';



const routes = [
    {
        path: "/na-gift-guide",
        thumb: "GIFTGUIDE_THUMB.jpg",
        title: "North America Gift Guide",
        component: NAGiftGuide
    },
    {
        path: "/arris",
        thumb: "ARRIS_THUMB.jpg",
        title: "Arris Project",
        component: Arris
    },
    {
        path: "/innovation",
        thumb: "BRAZIL_THUMB.jpg",
        title: "Brazil Innovation",
        component: BrazilInnovation
    },
    {
        path: "/i-will",
        thumb: "IWWIW_THUMB.jpg",
        title: "I Will What I Want",
        component: IWill
    },
    {
        path: "/hockey-world",
        thumb: "HOCKEY_THUMB.jpg",
        title: "Hockey World",
        component: HockeyWorld
    },
    {
        path: "/back-to-school",
        thumb: "BACKPACKS_THUMB.jpg",
        title: "Back To School",
        component: BackToSchool
    },
    {
        path: "/eu-site-launch",
        thumb: "INTL_HP_THUMB.jpg",
        title: "EU Site Launch",
        component: EUSite
    },
    {
        path: "/eu-gift-guide",
        thumb: "INTL_GG_THUMB.jpg",
        title: "EU Gift Guide",
        component: EUGiftGuide
    },
    {
        path: "/paypal-print",
        thumb: "PP_THUMB.jpg",
        title: "Paypal Print",
        component: PaypalPrint
    },
    {
        path: "/uniforms",
        thumb: "UNIFORMS_THUMB.jpg",
        title: "Uniforms",
        component: Uniforms
    },
    {
        path: "/footwear",
        thumb: "SPECTRUM_THUMB.jpg",
        title: "Footwear",
        component: Footwear
    },
    {
        path: "/cogender-underwear",
        thumb: "UNDIES_THUMB.jpg",
        title: "Cogender Underwear",
        component: CogenderUnderwear
    },
    {
        path: "/post-purchase",
        thumb: "POSTPURCHASE_THUMB.jpg",
        title: "Post Purchase",
        component: PostPurchase
    },
    {
        path: "/run-world",
        thumb: "RUN_THUMB.jpg",
        title: "Run World",
        component: RunWorld
    },
    {
        path: "/tbd",
        thumb: "PLACEHOLDER_THUMB.jpg",
        title: "TBD",
        component: TBD
    }
];

export default routes;