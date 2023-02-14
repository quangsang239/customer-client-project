import React from "react";
import styled from "styled-components";
import { Input, Space, Button, Avatar, Badge, Anchor } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
  HeartFilled,
} from "@ant-design/icons";
import Link from "next/link";

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: white;
`;
const StyledHeaderFirst = styled.div`
  width: 80%;
  height: fit-content;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderLogo = styled.div`
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  text-shadow: 4px 5px 10px;
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
const StyledHeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  border-radius: 5px;
  height: 35px;
  overflow: hidden;
  border: 2px solid #00d5c3;
`;
const StyledInputSearch = styled(Input)`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 0px;
`;
const StyledButtonSearch = styled(Button)`
  height: calc(100% + 4px);
  width: 40px;
  transform: translate(1px, -1px);
  background-color: #00d5c3;
  :hover {
    background-color: #00d5c3;
    opacity: 0.7;
  }
  color: white;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
`;
const StyledHeaderFeature = styled.div``;
const StyledAvatarFeature = styled(Avatar)`
  background-color: #00d5c3;
`;

const StyledMenuBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: #00d5c3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin: 0 10px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderFirst>
        <StyledHeaderLogo>
          <StyledHeaderTitle>PHSTek</StyledHeaderTitle>
          <StyledSubHeaderTitle>Shop</StyledSubHeaderTitle>
        </StyledHeaderLogo>
        <StyledHeaderSearch>
          <StyledInputSearch
            size="large"
            placeholder="Tìm kiếm sản phẩm"
            allowClear={true}
          />
          <StyledButtonSearch>
            <SearchOutlined />
          </StyledButtonSearch>
        </StyledHeaderSearch>
        <StyledHeaderFeature>
          <Space align="center" size={15}>
            <StyledAvatarFeature
              shape="square"
              size={40}
              icon={<UserOutlined />}
            />
            <Badge count={0} showZero>
              <StyledAvatarFeature
                shape="square"
                size={40}
                icon={<ShoppingOutlined />}
                alt="Cart"
              />
            </Badge>
            <StyledAvatarFeature
              shape="square"
              size={40}
              icon={<HeartFilled />}
            />
          </Space>
        </StyledHeaderFeature>
      </StyledHeaderFirst>
      <StyledMenuBar>
        <StyledLink href="#">Điện thoại</StyledLink>
        <StyledLink href="#">Laptop</StyledLink>
        <StyledLink href="#">MacBook</StyledLink>
        <StyledLink href="#">IPhone</StyledLink>
        <StyledLink href="#">Phụ Kiện</StyledLink>
        <StyledLink href="#">Hàng cũ</StyledLink>
        <StyledLink href="#">Gia Dụng</StyledLink>
      </StyledMenuBar>
    </StyledHeader>
  );
};

export default Header;
