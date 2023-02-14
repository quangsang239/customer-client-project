import React from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const StyledFooterWrap = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  background-color: #f9f9f9;
  padding: 10px 0;
`;
const StyledFooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const StyledContactUs = styled.div`
  width: 40%;
  text-align: centers;
  color: #5f5f5f;
`;
const StyledHeaderLogo = styled.div`
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const StyledHeaderTitle = styled.h1`
  color: #00d5c3;
  font-weight: 900;
  font-size: 30px;
`;
const StyledSubHeaderTitle = styled.h1`
  font-weight: 300;
  font-size: 30px;
`;
const StyledPhoneNumber = styled.div`
  margin-bottom: 10px;
  color: #5f5f5f;
`;
const StyledPhoneNumberIcon = styled(PhoneOutlined)`
  margin-right: 10px;
  font-size: 20px;
`;
const StyledAddressIcon = styled(EnvironmentOutlined)`
  margin-right: 10px;
  font-size: 20px;
`;
const StyledInfoNewSale = styled.div`
  width: 40%;
`;
const StyledInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInfoTitle = styled.h4`
  color: #3d3d3d;
  font-weight: 700;
  font-size: 20px;
`;
const StyledButtonInfo = styled(Button)`
  background-color: #00d5c3;
  color: white;
  font-weight: 700;
  :hover {
    opacity: 0.8;
    background-color: #00d5c3;
    color: white;
  }
`;

const StyledInfoInput = styled(Input)`
  border: 2px solid #00d5c3;
  margin-right: 5px;
`;
const Footer = () => {
  return (
    <StyledFooterWrap>
      <StyledFooterContent>
        <StyledContactUs>
          <StyledHeaderLogo>
            <StyledHeaderTitle>PHSTek</StyledHeaderTitle>
            <StyledSubHeaderTitle>Shop</StyledSubHeaderTitle>
          </StyledHeaderLogo>
          <StyledPhoneNumber>
            <StyledPhoneNumberIcon />
            0919984976 - 09199888888
          </StyledPhoneNumber>
          <StyledPhoneNumber>
            <StyledAddressIcon />
            01, Võ Văn Ngân, Linh Chiểu, Thủ Đức
          </StyledPhoneNumber>
        </StyledContactUs>
        <StyledInfoNewSale>
          <StyledInfoTitle>Thông tin khuyến mãi</StyledInfoTitle>
          <StyledPhoneNumber>
            Đăng ký email tại đây để có thể nhận nhiều thông tin khuyến mãi hơn
            tại shop
          </StyledPhoneNumber>
          <StyledInfoWrap>
            <StyledInfoInput placeholder="Nhập email" />
            <StyledButtonInfo icon={<MailOutlined />}>Nhận</StyledButtonInfo>
          </StyledInfoWrap>
        </StyledInfoNewSale>
      </StyledFooterContent>
    </StyledFooterWrap>
  );
};

export default Footer;
