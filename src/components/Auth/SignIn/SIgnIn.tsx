import palette from "../../../Tools/palette";
import styled from "styled-components";
import { DefaultButton } from "../../../Tools/Elements/buttons";
import constPalletes from "../../../Tools/palette";
import { useState } from "react";

const SignIn = () => {
  const [isUsernameValid, setUsernameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const onSubmitClick = () => {
    let userName = (document.getElementById("usernameInp") as HTMLInputElement)
      .value;
let password = (document.getElementById("passwordInp") as HTMLInputElement)
.value;
    if (userName.split(" ").join("").length <= 0) {
      setUsernameValid(false);
    }
    if (password.split(" ").join("").length <= 0) {
        setPasswordValid(false);
      }
  };
  return (
    <MainContent>
      <ContentArea>
        <SignInLogo>LOGO HERE</SignInLogo>
        <WebTitle>SCHEDULER</WebTitle>
        <Descript>Authorize for schedule</Descript>

        <FormArea>
          <CustomInput
            isInputValid={isUsernameValid}
            onChange={() => setUsernameValid(true)}
          >
            <input type="text" id="usernameInp" required />
            <label htmlFor="usernameInp">
              <span>Username</span>
            </label>
          </CustomInput>

          <CustomInput isInputValid={isPasswordValid} onChange={() => setPasswordValid(true)}>
            <input type="password" id="passwordInp" required />
            <label htmlFor="passwordInp">
              <span>Passwrod</span>
            </label>
          </CustomInput>

          <AuthButton
            styleType="default"
            darkMode={true}
            onClick={() => onSubmitClick()}
          >
            Sign In
          </AuthButton>
          <AuthButton styleType="primary" darkMode={true}>
            Create Account
          </AuthButton>
          <AuthButton styleType="secondary" darkMode={true}>
            Reset Password
          </AuthButton>
        </FormArea>
      </ContentArea>
    </MainContent>
  );
};

export default SignIn;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  background: -moz-linear-gradient(
    356deg,
    rgba(56, 62, 86, 1) 66%,
    rgba(197, 217, 219, 1) 67%
  );
  background: -webkit-linear-gradient(
    356deg,
    rgba(56, 62, 86, 1) 66%,
    rgba(197, 217, 219, 1) 67%
  );
  background: linear-gradient(
    356deg,
    rgba(56, 62, 86, 1) 66%,
    rgba(197, 217, 219, 1) 67%
  );

  background-repeat: no-repeat;
  background-color: #f8f9fe;
  font-family: "Open Sans, sans-serif";
`;

const ContentArea = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: max-content;
  margin-top: 50px;
  row-gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${(props) => props.theme.breakPoints.mobileL} {
    max-width: 100%;
    width: 100%;
  }
  @media ${(props) => props.theme.breakPoints.mobileM} {
    max-width: 100%;
    width: 100%;
  }
  @media ${(props) => props.theme.breakPoints.mobileL} {
    max-width: 100%;
    width: 100%;
  }
  @media ${(props) => props.theme.breakPoints.tablet} {
    max-width: 550px;
    width: 550px;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    max-width: 550px;
    width: 550px;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    max-width: 550px;
    width: 550px;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    max-width: 550px;
    width: 550px;
  }
`;

const SignInLogo = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  color: ${constPalletes["default-text-color"]};
`;

const WebTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: ${palette["default-text-color"]};
  font-family: "Open Sans", sans-serif;
`;

const Descript = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.7;
`;

const FormArea = styled.div`
  width: 400px;
  height: max-content;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  font-family: "Open Sans", sans-serif;
`;

const CustomInput = styled.div<{ isInputValid?: boolean }>`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  border: 1px solid
    ${({ isInputValid }) =>
      isInputValid ? "rgba(56, 62, 86, 0.2)" : "#ff6868"};
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;

  input {
    outline: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.dark.inputTextColor};
    border: none;
  }

  label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: ${({ isInputValid }) =>
      isInputValid ? " rgba(56, 62, 86, 0.4)" : "rgb(255, 0, 0, .4)"};
    font-weight: bold;

    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      transition: all 0.3s ease;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  input:valid + label span {
    color: ${({ isInputValid }) =>
      isInputValid ? " rgba(56, 62, 86, 0.4)" : "rgb(255, 0, 0, .4)"};
  }

  input:focus + label span {
    color: ${({ isInputValid }) =>
      isInputValid ? " rgba(56, 62, 86, 0.8)" : "rgb(255, 0, 0, .8)"};
  }

  input:focus + label span,
  input:valid + label span {
    bottom: 5px;
    transform: translateY(-150%);
    background-color: white;
    margin-left: 5px;
  }

  &:focus-within {
    border: 1px solid
      ${({ isInputValid }) => (isInputValid ? " #383e56" : "#f60000")};
    transition: all 0.3s ease;
  }
`;

const AuthButton = styled.button<{
  styleType?: "default" | "primary" | "secondary";
  darkMode?: true | false;
}>`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${(props) =>
    props.darkMode
      ? props?.styleType === "default"
        ? props.theme.palette.buttons.dark.textLight
        : ""
      : ""};
  background-color: ${(props) =>
    props.styleType
      ? props.theme.palette.buttons[props?.darkMode ? "dark" : "light"][
          props.styleType
        ]
      : "transparent"};
  border: ${(props) =>
    props.styleType === "secondary"
      ? `1px solid ${constPalletes["background-default"]}`
      : "none"};
  border-radius: 5px;
  font-weight: 600 !important;

  &:hover {
    background-color: ${({ darkMode, styleType, theme }) =>
      darkMode
        ? styleType === "primary"
          ? theme.palette.buttons.dark.primaryHover
          : styleType === "secondary"
          ? theme.palette.buttons.dark.secondaryHover
          : theme.palette.buttons.dark.defaultHover
        : ""};

    transition: background-color 0.3s ease;
  }
`;
