import React from 'react';
import Footer from '../Footer';

const About = () => {
    return (
        <div>
            <section className="w3-content w3-center about-content">
                <img src="assets/face.jpg" className="w3-image" style={{'width': '650px'}}/>
                <h1>YOURS TRULY</h1>
                <p>
                    Hello! I’m Molly. Visual, interactive, and UX designer. My background comes in the way of fine arts and print design. I sort of stumbled into the world of web design by chance. Good stumble though. Web’s pretty sweet. I’m terrible at folding laundry and I wish doing dishes wasn’t a thing but I can spot a misaligned pixel like a hawk. Is that something to brag about? Poss not def. But let’s chat if you think it is, and we can touch on all things web, print, and user experience related.
                </p>
                <h2>CONTACT ME</h2>
                <div>
                    <a href="mailto:mclaughlin.molly@gmail.com">mclaughlin.molly@gmail.com</a>
                    <a target="_blank" href="assets/MollyBritton_Resume.pdf">resume</a>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default About;

