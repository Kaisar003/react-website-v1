import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Router, Switch, Route } from "react-router-dom";

function Cards() {
  return (
    <Router>
      <Switch>
        <Route path="/Cards">
          <div className="cards">
            <h1>Check out these Upcoming Events!</h1>
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem
                    src="https://cdn.pixabay.com/photo/2015/03/15/14/53/kids-674513_1280.jpg"
                    text="Join our volunteer event in India and make a positive impact by contributing your time and skills towards a worthy cause"
                    label="India"
                    path="/.events"
                  />
                  <CardItem
                    src="https://cdn.pixabay.com/photo/2017/02/07/04/12/african-2044961_1280.jpg"
                    text="Are you passionate about making a positive impact on children's lives? Join our volunteer event in Africa, where we aim to create a joyful and memorable experience for children in need"
                    label="Africa"
                    path="/.events"
                  />
                </ul>
                <ul className="cards__items">
                  <CardItem
                    src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg"
                    text="We are organizing a volunteer event focused on ocean conservation. This event aims to raise awareness about the importance of preserving our oceans and protecting marine life."
                    label="Peru"
                    path="/events"
                  />
                  <CardItem
                    src="https://images.pexels.com/photos/12314915/pexels-photo-12314915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    text="Get your hands dirty and make a difference in our community! We're organizing a community garden planting event at Gardenville"
                    label="Gardenville"
                    path="/products"
                  />
                  <CardItem
                    src="https://cdn.pixabay.com/photo/2018/10/13/20/04/garbage-3745004_1280.jpg"
                    text="Join us for a beach cleanup event at Sunny Shores Beach. Help us protect the marine environment by picking up litter, sorting recyclables, and spreading awareness about the importance of keeping our beaches clean"
                    label="Coastal City"
                    path="/sign-up"
                  />
                </ul>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default Cards;
