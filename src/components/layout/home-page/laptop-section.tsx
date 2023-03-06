import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const StyledLaptopSectionWrap = styled("div")`
  position: relative;
  width: 90%;
  margin: 20px auto;
  background-color: white;
  /* background-color: #ededed; */
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: 0px 0px 0px 0px;
  user-select: none;
`;

const StyledCard = styled(Card)`
  padding: 0 10px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StyledSliderWrap = styled(Slider)`
  position: relative;
  margin-top: 20px;
  .slick-next,
  .slick-prev {
    z-index: 9;
    position: absolute;
    font-size: 50px;
    width: 50px;
    height: 50px;
    ::before {
      font-size: 50px;
      color: #00d5c3;
    }
  }
`;
const StyledPriceTitle = styled(Typography)`
  position: relative;
  font-weight: 700;
  color: #fc3030;
  font-size: 25px;
`;
const StyledCardMedia = styled(CardMedia)`
  background-color: #00d5c3;
  margin-bottom: 10px;
  border-radius: 10px;
  height: 170px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: contain;
`;
const StyledCardTypography = styled(Typography)`
  margin-bottom: 20px;
`;
const StyledCardTypographyTileProduct = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
`;
const StyledButton = styled(Button)`
  background-color: #00d5c3;
  color: white;
  font-weight: 700;
  :hover {
    opacity: 0.6;
    background-color: #00d5c3;
  }
`;
const StyledButtonFavorite = styled(Button)`
  background-color: white;
  color: #00d5c3;
  font-weight: 700;
  :hover {
    opacity: 0.6;
    background-color: white;
  }
`;
const StyledPriceCurrent = styled(Chip)`
  background-color: #00d5c3;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
const StyledPriceNet = styled(Chip)`
  text-decoration: line-through;
  font-size: 16px;
  font-weight: 600;
  border-color: black;
`;
const StyledCardAction = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function LaptopSection() {
  return (
    <StyledLaptopSectionWrap>
      <StyledPriceTitle variant="h5">KHUYẾN MÃI HOT</StyledPriceTitle>
      <StyledSliderWrap
        infinite={true}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
        <StyledCard>
          <StyledCardMedia
            title="product"
            image="https://cdn.tgdd.vn/Products/Images/44/284257/asus-vivobook-15x-oled-a1503za-i5-l1290w-040722-050332-600x600.jpg"
          />
          <Divider />
          <CardContent>
            <StyledCardTypographyTileProduct variant="h4">
              iPhone 13 Pro Max
            </StyledCardTypographyTileProduct>
            <StyledCardTypography>
              iPhone 14 Pro hội tụ những tính năng đẳng cấp nhất với thiết kế
              mới, bộ vi xử lý Apple A16 Bionic với sức mạnh chưa từng thấy
            </StyledCardTypography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <StyledPriceCurrent label="20.000.000đ" variant="filled" />
              <StyledPriceNet variant="outlined" label="24.000.000" />
            </Stack>
          </CardContent>
          <Divider />
          <StyledCardAction>
            <StyledButton>Chi tiết</StyledButton>
            <StyledButton>Thêm vào giỏ</StyledButton>
            <StyledButtonFavorite>
              <FavoriteIcon />
            </StyledButtonFavorite>
          </StyledCardAction>
        </StyledCard>
      </StyledSliderWrap>
    </StyledLaptopSectionWrap>
  );
}

export default LaptopSection;
