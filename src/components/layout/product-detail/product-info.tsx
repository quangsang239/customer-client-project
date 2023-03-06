import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Image from "next/image";

const StyledProductInfoWrap = styled("div")``;
const StyledPriceWrap = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const StyledPriceCurrent = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: #b8b8b8;
  margin-right: 20px;
  text-decoration: line-through;
`;
const StyledPriceDiscount = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  color: #00b5a5;
  margin-right: 20px;
`;
const StyledColorPhoneWrap = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledColorPhone = styled("div")`
  overflow: hidden;
  margin-top: 10px;
  flex-basis: 32%;
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 5px;
  border: solid 1px #b8b8b8;
  justify-content: space-around;
  padding: 0 2px;
  user-select: none;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const StyledImage = styled("div")`
  position: relative;
  width: 30px;
  height: 40px;
`;
const StyledColorPhoneInfoWrap = styled("div")`
  min-width: fit-content;
`;
const StyledColorPhoneDes = styled(Typography)`
  font-weight: 700;
`;
const StyledColorPrice = styled(Typography)`
  font-size: 14px;
  color: #b8b8b8;
`;
const StyledInfoDiscount = styled("div")`
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
`;
const StyledTitleInfoDiscountWrap = styled("div")`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #00d5c32b;
  color: #00a698;
`;
const StyledTitleInfoDiscount = styled(Typography)`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 700;
`;
const StyledContentDiscountWrap = styled("div")``;
const StyledContentDiscount = styled(Typography)`
  margin: 0 10px;
`;
type Props = {};

const ProductInfo = (props: Props) => {
  return (
    <StyledProductInfoWrap>
      <StyledPriceWrap>
        <StyledPriceDiscount>28.190.000 đ</StyledPriceDiscount>
        <StyledPriceCurrent>34.990.000 đ</StyledPriceCurrent>
      </StyledPriceWrap>
      <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
        Chọn màu để xem giá và chi nhánh có hàng
      </Typography>
      <StyledColorPhoneWrap>
        <StyledColorPhone>
          <StyledImage>
            <Image src="/ip13.webp" fill alt="" />
          </StyledImage>
          <StyledColorPhoneInfoWrap>
            <StyledColorPhoneDes>Vàng</StyledColorPhoneDes>
            <StyledColorPrice>28.190.000 đ</StyledColorPrice>
          </StyledColorPhoneInfoWrap>
        </StyledColorPhone>
        <StyledColorPhone>
          <StyledImage>
            <Image src="/ip13.webp" fill alt="" />
          </StyledImage>
          <StyledColorPhoneInfoWrap>
            <StyledColorPhoneDes>Vàng</StyledColorPhoneDes>
            <StyledColorPrice>28.190.000 đ</StyledColorPrice>
          </StyledColorPhoneInfoWrap>
        </StyledColorPhone>
        <StyledColorPhone>
          <StyledImage>
            <Image src="/ip13.webp" fill alt="" />
          </StyledImage>
          <StyledColorPhoneInfoWrap>
            <StyledColorPhoneDes>Vàng</StyledColorPhoneDes>
            <StyledColorPrice>28.190.000 đ</StyledColorPrice>
          </StyledColorPhoneInfoWrap>
        </StyledColorPhone>
        <StyledColorPhone>
          <StyledImage>
            <Image src="/ip13.webp" fill alt="" />
          </StyledImage>
          <StyledColorPhoneInfoWrap>
            <StyledColorPhoneDes>Vàng</StyledColorPhoneDes>
            <StyledColorPrice>28.190.000 đ</StyledColorPrice>
          </StyledColorPhoneInfoWrap>
        </StyledColorPhone>
      </StyledColorPhoneWrap>
      <StyledInfoDiscount>
        <StyledTitleInfoDiscountWrap>
          <CardGiftcardIcon />
          <StyledTitleInfoDiscount>Khuyến mãi</StyledTitleInfoDiscount>
        </StyledTitleInfoDiscountWrap>
        <StyledContentDiscountWrap>
          <StyledContentDiscount>
            Khách hàng nhập mã APPLEMOCA khi thanh toán qua ví Moca sẽ được giảm
            600.000đ cho các sản phẩm iPhone 13 & 14 Series từ 19 triệu trở lên
          </StyledContentDiscount>
          <StyledContentDiscount>
            Khách hàng nhập mã APPLEMOCA khi thanh toán qua ví Moca sẽ được giảm
            600.000đ cho các sản phẩm iPhone 13 & 14 Series từ 19 triệu trở lên
          </StyledContentDiscount>
        </StyledContentDiscountWrap>
      </StyledInfoDiscount>
    </StyledProductInfoWrap>
  );
};

export default ProductInfo;
