import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";

const StyledSliderImage = styled(Slider)`
  position: relative;
  width: 100%;
  .slick-list {
    overflow: hidden;
    border-radius: 20px;
    border: solid 2px #b2b2b2;
    .slick-track {
      .slick-slide {
        margin: 0 auto;
      }
    }
  }
`;
const StyledImageWrap = styled("div")`
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 300px;
  left: 50%;
  transform: translateX(-50%);
`;
type Props = {};

const ImgSlide = (props: Props) => {
  return (
    <StyledSliderImage
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <StyledImageWrap>
        <Image alt="" src="/ip13.webp" fill />
      </StyledImageWrap>
      <StyledImageWrap>
        <Image alt="" src="/ip13.webp" fill />
      </StyledImageWrap>
      <StyledImageWrap>
        <Image alt="" src="/ip13.webp" fill />
      </StyledImageWrap>
    </StyledSliderImage>
  );
};

export default ImgSlide;
