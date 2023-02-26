import React from "react";
import SliderBar from "./slider-bar";
import MobileSection from "./mobile-section";
import { styled } from "@mui/material/styles";

const StyledHomePageWrap = styled("div")`
  position: relative;
  z-index: 1;
  background-color: #efefef;
  padding-bottom: 10px;
`;

function HomePage() {
  return (
    <StyledHomePageWrap>
      <SliderBar></SliderBar>
      <MobileSection></MobileSection>
      <MobileSection></MobileSection>
      <MobileSection></MobileSection>
    </StyledHomePageWrap>
  );
}

export default HomePage;
