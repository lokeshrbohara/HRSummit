import { Carousel } from "antd";
import { Fragment } from "react";
import logo1 from "../../../assets/img1.jpg";
import logo2 from "../../../assets/img2.png";
import logo3 from "../../../assets/img3.png";
import "./HomeCarousel.css";

const contentStyle = {
  height: "100%",
  width: "100%",
  background: "#364d79",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const HomeCarousel = () => {
  return (
    <Fragment>
      <Carousel style={{ borderRadius:"5%" }} autoplay effect="fade" dotPosition="top">
        <div>
          <img style={contentStyle} src={logo1} alt="logo" />
          <p className="centered">Hello World!</p>
        </div>
        <div>
          <img style={contentStyle} src={logo2} alt="logo" />
          <p className="centered">Hello World!</p>
        </div>
        <div>
          <img style={contentStyle} src={logo3} alt="logo" />
          <p className="centered">Hello World!</p>
        </div>
      </Carousel>
    </Fragment>
  );
};
export default HomeCarousel;
