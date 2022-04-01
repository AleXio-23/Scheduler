import palette from '../../../Tools/palette';
import styled from 'styled-components';
import constPalletes from '../../../Tools/palette';
import { useState } from 'react';
import { SchedulerButton } from '../../../Tools/Elements/buttons';
import { CustomInput } from '../../../Tools/Elements/inputs';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [isUsernameValid, setUsernameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const onSubmitClick = () => {
    const userName = (
      document.getElementById('usernameInp') as HTMLInputElement
    ).value;
    const password = (
      document.getElementById('passwordInp') as HTMLInputElement
    ).value;
    if (userName.split(' ').join('').length <= 0) {
      setUsernameValid(false);
    }
    if (password.split(' ').join('').length <= 0) {
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

          <CustomInput
            isInputValid={isPasswordValid}
            onChange={() => setPasswordValid(true)}
          >
            <input type="password" id="passwordInp" required />
            <label htmlFor="passwordInp">
              <span>Password</span>
            </label>
          </CustomInput>

          <SchedulerButton
            styleType="default"
            darkMode={true}
            onClick={() => onSubmitClick()}
          >
            Sign In
          </SchedulerButton>

          <SchedulerButton styleType="primary" darkMode={true} onClick = {() => navigate('/sign-up')}>
              Create Account
          </SchedulerButton>

          <SchedulerButton styleType="secondary" darkMode={true} onClick = {() => navigate('/password-recovery')}>
            Reset Password
          </SchedulerButton>
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
  color: ${constPalletes['default-text-color']};
`;

const WebTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: ${palette['default-text-color']};
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
