import styled from "styled-components";
import { App, Button, Checkbox, Form, Input } from "antd";

const StyledApp = styled(App)`
  width: 100vw;
  height: 100vh;
`;
const StyledWrap = styled.div`
  display: flex;
  position: relative;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ::before {
    content: "";
    z-index: -1;
    position: absolute;
    right: -10%;
    top: -10%;
    width: 30%;
    height: 50%;
    border-radius: 30% 70% 70% 30% / 39% 37% 63% 61%;
    background: linear-gradient(
      180deg,
      rgba(55, 202, 209, 1) 0%,
      rgba(68, 126, 225, 1) 100%
    );
  }
  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: -30%;
    right: 5%;
    width: 40%;
    height: 60%;
    border-radius: 86% 14% 66% 34% / 28% 70% 30% 72%;
    background: linear-gradient(
      0deg,
      rgba(55, 202, 209, 1) 0%,
      rgba(68, 126, 225, 1) 100%
    );
  }
`;

const StyledImage = styled.div`
  height: 100%;
  width: 50%;
  background-image: url("/register-page.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const StyledContentWrap = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  font-size: 20px;
`;
const StyledButton = styled(Button)``;
const StyledForm = styled(Form)`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0px 20px;
`;
const StyledInput = styled(Input)``;

const Login = () => {
  return (
    <StyledApp>
      <StyledWrap>
        <StyledImage />
        <StyledContentWrap>
          <h1>H1</h1>
          <StyledForm
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            size="large"
          >
            <Form.Item
              label="Tên đăng nhập"
              name="username"
              rules={[
                { required: true, message: "Vui lòng điền tên đăng nhập!" },
              ]}
            >
              <StyledInput />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="Password"
              rules={[{ required: true, message: "Vui lòng điền mật khẩu!" }]}
            >
              <StyledInput.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
              <StyledButton type="primary" htmlType="submit">
                Đăng Nhập
              </StyledButton>
            </Form.Item>
          </StyledForm>
        </StyledContentWrap>
      </StyledWrap>
    </StyledApp>
  );
};

export default Login;
