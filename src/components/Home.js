import React from "react";
import "../Styles/Components/Home.scss";
import HomeSlide from "./HomeSlide";
import SocialMedia from "./SocialMedia";

const coffee = ["c", "o", "f", "f", "e", "e"];

const Home = () => {
  return (
    <section className="home">
      <div className="coffee-shop">
        <div className="coffee">
          {coffee.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
        <div className="shop">shop</div>
      </div>
      <div className="home-content">
        <div className="container">
          <div className="content flex">
            <h1>
              Nulla facilisi <br></br>morbi <span>tempus</span> <br></br>iaculis
              urna
            </h1>
            <HomeSlide />
          </div>
          <div className="flex flex-2">
            <ul className="list-values">
              <li>
                <span>imperdiet</span>
                <p>Nec feugiat in fermentum</p>
              </li>
              <li>
                <span>faucibus</span>
                <p>Felis eget velit aliquet sagittis</p>
              </li>
              <li>
                <span>Consequat</span>
                <p>Quis hendrerit dolor magna</p>
              </li>
            </ul>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
