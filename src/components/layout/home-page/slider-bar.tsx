import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Slider from "react-slick";

const StyledHomeWrap = styled("div")`
  z-index: 0;
  position: relative;
  padding-top: 125px;
  background-color: #e5e5e5;
`;
const StyledItemSlider = styled("div")`
  position: relative;
  height: 400px;
`;
const StyledItemSliderWrap = styled("div")`
  display: flex;
  justify-content: space-around;
  justify-items: center;
`;
const StyledContentWrap = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
`;
const StyledImage = styled(Image)`
  :hover {
    scale: 1.3;
  }
  transition: all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;
const StyledMainTitle = styled("h2")`
  line-height: 20px;
  font-size: 35px;
  color: #00d5c3;
  text-shadow: 4px 5px 20px;
`;
const StyledSubTitle = styled("h3")`
  font-size: 30px;
`;
const StyledContentTitle = styled("span")`
  font-size: 20px;
  margin-top: 10px;
  word-wrap: normal;
  color: #3d3d3d;
`;
const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  .slick-dots {
    bottom: 25px;
    font-size: 20px;
    button {
      ::before {
        font-size: 20px;
      }
    }
  }
`;

function SliderBar() {
  return (
    <StyledHomeWrap>
      <StyledSlider
        autoplay={true}
        dots={true}
        infinite={true}
        speed={1500}
        autoplaySpeed={3000}
        slidesToShow={1}
        slidesToScroll={1}
        pauseOnHover={true}
        arrows={false}
      >
        <StyledItemSlider>
          <StyledItemSliderWrap>
            <StyledImage
              width={550}
              height={400}
              src="/tivi-slider.png"
              alt=""
            />
            <StyledContentWrap>
              <StyledSubTitle>Trải nghiệm thực tế</StyledSubTitle>
              <StyledMainTitle>Hình ảnh lên đến 4k</StyledMainTitle>
              <StyledContentTitle>
                Tìm kiếm giọng nói bằng tiếng Việt, Tích hợp trợ lí ảo Google
                Assistant, Điều khiển bằng giọng nói không cần remote, Chiếu
                hình ảnh từ điện thoại lên TV, Điều khiển qua ứng dụng, Chơi
                game trên tivi
              </StyledContentTitle>
            </StyledContentWrap>
          </StyledItemSliderWrap>
        </StyledItemSlider>
        <StyledItemSlider>
          <StyledItemSliderWrap>
            <StyledImage
              width={550}
              height={400}
              src="/tivi-slider.png"
              alt=""
            />
            <StyledContentWrap>
              <StyledSubTitle>Trải nghiệm thực tế</StyledSubTitle>
              <StyledMainTitle>Hình ảnh lên đến 4k</StyledMainTitle>
              <StyledContentTitle>
                Tìm kiếm giọng nói bằng tiếng Việt, Tích hợp trợ lí ảo Google
                Assistant, Điều khiển bằng giọng nói không cần remote, Chiếu
                hình ảnh từ điện thoại lên TV, Điều khiển qua ứng dụng, Chơi
                game trên tivi
              </StyledContentTitle>
            </StyledContentWrap>
          </StyledItemSliderWrap>
        </StyledItemSlider>
        <StyledItemSlider>
          <StyledItemSliderWrap>
            <StyledImage
              width={550}
              height={400}
              src="/tivi-slider.png"
              alt=""
            />
            <StyledContentWrap>
              <StyledSubTitle>Trải nghiệm thực tế</StyledSubTitle>
              <StyledMainTitle>Hình ảnh lên đến 4k</StyledMainTitle>
              <StyledContentTitle>
                Tìm kiếm giọng nói bằng tiếng Việt, Tích hợp trợ lí ảo Google
                Assistant, Điều khiển bằng giọng nói không cần remote, Chiếu
                hình ảnh từ điện thoại lên TV, Điều khiển qua ứng dụng, Chơi
                game trên tivi
              </StyledContentTitle>
            </StyledContentWrap>
          </StyledItemSliderWrap>
        </StyledItemSlider>
      </StyledSlider>
    </StyledHomeWrap>
  );
}

export default SliderBar;
