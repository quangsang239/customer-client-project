import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Box from "@mui/material/Box";
import Link from "next/link";

const StyledHeaderWrap = styled("div")`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
`;
const StyledAppBar = styled(AppBar)`
  position: relative;
  background-color: white;
  padding-top: 10px;
`;
const StyledContainer = styled(Container)``;
const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const StyledTypographyLogo = styled(Typography)`
  text-shadow: 4px 5px 10px;
  color: #00d5c3;
  font-weight: 600;
  font-size: 30px;
`;
const StyledTypographySubLogo = styled("span")`
  color: black;
  font-weight: 400;
  font-size: 30px;
`;
const StyledSearchIconWrap = styled("div")`
  background-color: #00d5c3;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  width: 40px;
`;
const StyledSearch = styled("div")`
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 400px;
  overflow: hidden;
  border: solid 2px #00d5c3;
  :hover {
    opacity: 0.8;
  }
`;
const StyledInputBase = styled(InputBase)`
  height: 100%;
  padding: 0 10px;
  color: black;
  padding-left: 45px;
  width: 100%;
  font-size: 16px;
`;
const StyledAvatar = styled(Avatar)`
  background-color: #00d5c3;
`;
const StyledBadge = styled(Badge)`
  border-radius: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const StyledMenuBar = styled(Box)`
  width: 100%;
  height: 40px;
  background-color: #00d5c3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLinkNavigateMenu = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  padding: 0 10px;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderMaterial = () => {
  return (
    <StyledHeaderWrap>
      <StyledAppBar>
        <StyledContainer>
          <StyledToolBar>
            <StyledTypographyLogo>
              PHSTek<StyledTypographySubLogo>Shop</StyledTypographySubLogo>
            </StyledTypographyLogo>
            <StyledSearch>
              <StyledSearchIconWrap>
                <SearchIcon sx={{ fontSize: "30px", textAlign: "center" }} />
              </StyledSearchIconWrap>
              <StyledInputBase placeholder="Tìm kiếm sản phẩm ..." />
            </StyledSearch>
            <Stack direction="row" spacing={2}>
              <StyledBadge max={99} badgeContent={10} color="warning">
                <StyledAvatar variant="rounded">
                  <PersonOutlineOutlinedIcon
                    sx={{ fontSize: "25px", fontWeight: 100 }}
                  />
                </StyledAvatar>
              </StyledBadge>
              <StyledBadge max={99} badgeContent={10} color="warning">
                <StyledAvatar variant="rounded">
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: "25px", fontWeight: 100 }}
                  />
                </StyledAvatar>
              </StyledBadge>
              <StyledBadge max={99} badgeContent={10} color="warning">
                <StyledAvatar variant="rounded">
                  <FavoriteOutlinedIcon
                    sx={{ fontSize: "25px", fontWeight: 100 }}
                  />
                </StyledAvatar>
              </StyledBadge>
            </Stack>
          </StyledToolBar>
        </StyledContainer>
        <StyledMenuBar>
          <StyledLinkNavigateMenu href="#">Điện thoại</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Laptop</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Điện thoại</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Iphone</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Macbook</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Phụ kiện</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Hàng cũ</StyledLinkNavigateMenu>
          <StyledLinkNavigateMenu href="#">Gia dụng</StyledLinkNavigateMenu>
        </StyledMenuBar>
      </StyledAppBar>
    </StyledHeaderWrap>
  );
};

export default HeaderMaterial;
