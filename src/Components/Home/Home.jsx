import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home amazon"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Double Pump Mens Button Down Shirts 100% Cotton Long Sleeve Shirts Regular Fit"
            price={29.24}
            rating={5}
            image="https://m.media-amazon.com/images/I/81gl3CDeAIL._AC_SR135,135_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Amazon Basics Executive Office Desk Chair with Armrests, Adjustable Height/Tilt, 360-Degree Swivel, 275Lb Capacity - Black/Pewter"
            price={160.91}
            rating={4}
            image="	https://m.media-amazon.com/images/I/71UQ3ltXXpL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={64.99}
            rating={4}
            image="	https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
