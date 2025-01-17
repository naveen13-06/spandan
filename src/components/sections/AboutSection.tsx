import '../css/about.css';
import img from '../assets/about2.jpg';
function About() {
        return(
            <div>
            <br />
           <div className="outer-container">
                <div className="image-container">
                    <img className = "containImage" src={img} alt="infin8"/>
                </div>
                <div className="text-container">
                    <p>Infin8 is the annual Cultural Fest of IIIT Bangalore. The
fifth iteration of Infin8 has numerous live events,
workshops and a multitude of contests, with the main
attractions being the Battle of Bands and EDM Night
featuring Candice Redding & Kalpanik Bass.</p>
                </div>
           </div>
           </div>
        );
    }

export default About;