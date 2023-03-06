import React from "react";
import SliderBar from "./slider-bar";
import PhoneSection from "./phone-section";
import { styled } from "@mui/material/styles";
import LaptopSection from "./laptop-section";

const StyledHomePageWrap = styled("div")`
  position: relative;
  z-index: 1;
  background-color: #efefef;
  padding-bottom: 10px;
`;

function HomePage() {
  return (
    <StyledHomePageWrap>
      <SliderBar />
      <PhoneSection />
      <LaptopSection />
    </StyledHomePageWrap>
  );
}

export default HomePage;
