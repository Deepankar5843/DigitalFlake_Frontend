import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import centerImg from "../../assets/dgc.png";

function Home() {
  return (
    <div>
      <Header />
      <NavBar />

      <div className="relative mt-20">
        <img
          src={centerImg}
          className="mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-x-20"
        />
        <h1
          style={{ marginTop: 170, marginLeft: 38 }}
          className="text-3xl text-center text-black-400 absolute left-1/2 transform -translate-x-1/2 -translate-x-40"
        >
          Welcome to DigitalFlake Admin
        </h1>
      </div>
    </div>
  );
}

export default Home;
