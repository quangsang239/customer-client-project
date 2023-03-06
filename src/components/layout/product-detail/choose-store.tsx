import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "@mui/material/Link";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SecurityIcon from "@mui/icons-material/Security";
type Props = {};

const StyledAddressHaveProduct = styled(Box)`
  border: solid 1px #b8b8b8;
  border-radius: 10px;
  overflow: hidden;
  .MuiBox-root:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const ChooseStore = (props: Props) => {
  return (
    <Stack spacing={2}>
      <Box display="flex" justifyContent="space-between">
        <Box flexBasis="50%">
          <FormControl fullWidth size="small">
            <InputLabel id="city-label">Tỉnh/Thành Phố</InputLabel>
            <Select
              labelId="city-label"
              id="city"
              // value={age}
              label="Tỉnh/Thành Phố"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box flexBasis="50%">
          <FormControl fullWidth size="small">
            <InputLabel id="district-label">Quận/Huyện</InputLabel>
            <Select
              labelId="district-label"
              id="district"
              // value={age}
              label="Quận/Huyện"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Typography>Có 1 cửa hàng có sản phẩm</Typography>
      <StyledAddressHaveProduct>
        <Box
          padding="10px"
          display="flex"
          overflow="hidden"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography display="flex" alignItems="center" color="#00b5a5">
            <LocalPhoneIcon />
            0919984976
          </Typography>
          {" - "}
          <Link fontSize={12}>Số 1 Võ Văn Ngân Linh Chiểu Thủ Đức</Link>
        </Box>
      </StyledAddressHaveProduct>
      <StyledAddressHaveProduct padding="10px" color="#3e3e3e">
        <Typography fontWeight="700" marginBottom="10px">
          Thông tin sản phẩm
        </Typography>
        <Typography marginBottom="10px">
          <SmartphoneIcon />
          CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của
          Apple Việt Nam
        </Typography>
        <Typography marginBottom="10px">
          <SecurityIcon />
          CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của
          Apple Việt Nam
        </Typography>
      </StyledAddressHaveProduct>
    </Stack>
  );
};

export default ChooseStore;
