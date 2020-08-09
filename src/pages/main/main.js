import React from "react";
import MainComponent from "../../components/main/main";
import { IMAGE } from "../../static/images/image";
const Main = () => {
  const infoCard = [
    {
      count: 1,
      text: "Easily look up your favorite product/service",
      img: IMAGE
    },
    {
      count: 2,
      text: "Rate the product/service and provide your feedback ",
      img: IMAGE
    },
    {
      count: 3,
      text: "We go to work and get you paid for your feedback",
      img: IMAGE
    }
  ];
  const authCard = [
    {
      title: "Users",
      text:
        "Your feedback is important and has value.let us help you voice be heard and get started earning your rewards and points.Cash in or donate to your favorite charity.its up to you",
      button: "Sign up with Linkedin",
      path: "/sign-up",
      img: IMAGE,
      className: "border-right"
    },
    {
      title: "Companies",
      text:
        "Go in quality insights from your most important partners,your customers and future customer.Get feedback on your company.and other companies in tech industry",
      button: "Register with Linkedin",
      path: "/register",
      img: IMAGE
    }
  ];
  return (
    <MainComponent infoCard={infoCard} authCard={authCard}></MainComponent>
  );
};

export default Main;
