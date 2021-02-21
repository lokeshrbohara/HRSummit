import React, { Fragment } from "react";

import HomeCarousel from "../../components/Home/HomeCarousel/HomeCarousel";
import "./Home.css";
import CardV from "../../components/Cards/Card";

import maps from "../../assets/maps.png";
import about from "../../assets/about.jpg";
import contact from "../../assets/contact.jpg";
import sponsor from "../../assets/sponsor.png";
import speaker from "../../assets/speaker.jpg";

const Home = () => {

  return (
    <Fragment>
      <div className="ho-main">
        <HomeCarousel />
        <div className="cardsdisplay">
          <div style={{justifyContent:"center", display:"flex"}}>
            <CardV 
            cardwidth="80%"
            text="Venue"
            logo={maps}
            />
          </div>
          <div style={{justifyContent:"center", display:"flex"}}>
            <CardV 
            cardwidth="80%"
            text="About Us"
            logo={about}
            />
          </div>
          <div style={{justifyContent:"center", display:"flex"}}>
            <CardV 
            cardwidth="80%"
            text="Sponsor"
            logo={sponsor}
            />
          </div>
          <div style={{justifyContent:"center", display:"flex"}}>
            <CardV 
            cardwidth="80%"
            text="Contact Us"
            logo={contact}
            />
          </div>
          
        </div>
        <div className="speakercard">
          <CardV 
            cardwidth="80%"
            text="Speakers"
            logo={speaker}
            />
        </div>
        
        
      </div>
    </Fragment>
  );
};

export default Home;
