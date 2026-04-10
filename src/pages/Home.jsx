import React from "react";
import Navbar from "./Header/Navbar";
import Overview from "../components/overview/Overview";
import Cards from "../components/cards/Cards";
import Spotlight from "../components/spotlight/Spotlight";
import Responsibility from "../components/responsibility/Responsibility";
import Trust from "../components/trust/Trust";
import Why from "../components/why/Why";
import Slider from "../components/slider/Slider";
import News from "../components/news/News";
import Concern from "../components/concern/Concern";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Overview />
      <Cards />
      <Spotlight />
      <Responsibility />
      <Trust />
      <Why />
      <Slider />
      <News />
      <Concern />
      <Footer />
    </div>
  );
};

export default Home;
