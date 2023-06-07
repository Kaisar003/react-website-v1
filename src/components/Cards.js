import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Upcoming Events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://cdn.pixabay.com/photo/2015/03/15/14/53/kids-674513_1280.jpg"
              text="Join our volunteer event in India and make a positive impact by contributing your time and skills towards a worthy cause"
              label="India"
              path="/services"
            />
            <CardItem
              src="https://cdn.pixabay.com/photo/2017/02/07/04/12/african-2044961_1280.jpg"
              text="Are you passionate about making a positive impact on children's lives? Join our volunteer event in Africa, where we aim to create a joyful and memorable experience for children in need"
              label="Africa"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg"
              text="We are organizing a volunteer event focused on ocean conservation. This event aims to raise awareness about the importance of preserving our oceans and protecting marine life."
              label="Peru"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
