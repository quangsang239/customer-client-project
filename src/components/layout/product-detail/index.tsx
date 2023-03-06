import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ImgSlide from "./img-slider";
import ProductInfo from "./product-info";
import ChooseStore from "./choose-store";

const StyledProductDetail = styled("section")`
  padding-top: 120px;
`;

const StyledProductDetailWrap = styled("div")`
  width: 80%;
  margin: 20px auto;
`;
const StyledTypographyHeader = styled(Typography)`
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledProductContentWrap = styled(Grid)`
  margin-top: 10px;
  padding-bottom: 30px;
`;

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <StyledProductDetail>
      <StyledProductDetailWrap>
        <StyledTypographyHeader variant="h5">
          iPhone 14 Pro Max 128GB | Chính hãng VN/A
        </StyledTypographyHeader>
        <Divider />
        <StyledProductContentWrap container spacing={3}>
          <Grid item xs={3}>
            <ImgSlide />
          </Grid>

          <Grid item xs={5}>
            <ProductInfo />
          </Grid>
          <Grid item xs={4}>
            <ChooseStore />
          </Grid>
        </StyledProductContentWrap>
      </StyledProductDetailWrap>
    </StyledProductDetail>
  );
};

export default ProductDetail;
