import React from "react";
import SidebarComponent from "../components/HomePage/SidebarComponent";
import NavBarComponent from "../components/HomePage/NavBarComponent";
import ContentComponent from "../components/HomePage/ContentComponent";
import ModalComponent from "../components/HomePage/ModalComponent";
import FooterComponent from "../components/HomePage/FooterComponent";

function Home(props) {
  return (
    <div id="page-top">
      <div id="wrapper">
        <SidebarComponent />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBarComponent />
            <ContentComponent />
          </div>
          <FooterComponent />
        </div>
      </div>
      <ModalComponent />
    </div>
  );
}

export default Home;
