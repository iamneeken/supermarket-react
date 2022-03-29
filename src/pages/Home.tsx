import React from "react";

import MainSlider from "../components/MainSlider/MainSlider";
import TopOffer from "../components/TopOffers/TopOffer";
import AdSlider from "../components/MainSlider/AdSlider";
import Banner from "../components/Banner/Banner";
import BrandStore from "../components/BrandStore/BrandStore";
import NewOffer from "../components/NewOffer/NewOffer";
import TopOfferCopy from "../components/TopOffers/TopOfferCopy";

function Home():JSX.Element {
  return (
    <>
      <MainSlider />
      <TopOfferCopy />
      <AdSlider />
      <Banner />
      <BrandStore />
      <NewOffer />

    </>
  );
}

export default Home;
