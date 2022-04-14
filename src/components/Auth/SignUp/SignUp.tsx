import palette from '../../../Tools/palette';
import styled, { css } from 'styled-components';
import { CustomInput } from '../../../Tools/Elements/inputs';
import { SchedulerButton } from '../../../Tools/Elements/buttons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const onSubmitClick = () => {
    console.log('test');
  };
  const navigate = useNavigate();

  return (
    <MainContent>
      <SchedulerButton
        styleType="default"
        darkMode={true}
        customStyle={complexMixin}
        onClick = {() => navigate('/sign-in')}
      >
        Sign In
      </SchedulerButton>
      <ContentArea>
        <PageTitle>SCHEDULER</PageTitle>
        <Description>Recover Password</Description>
        <SignUpContent>
          <InputInlinePair>
            <CustomInput isInputValid={true}>
              <input type="text" id="firstnameInp" required />
              <label htmlFor="firstnameInp">
                <span>First Name</span>
              </label>
            </CustomInput>

            <CustomInput isInputValid={true}>
              <input type="text" id="lastnameInp" required />
              <label htmlFor="lastnameInp">
                <span>Last Name</span>
              </label>
            </CustomInput>
          </InputInlinePair>

          <CustomInput isInputValid={true}>
            <input type="text" id="emailInp" required />
            <label htmlFor="emailInp">
              <span>Email</span>
            </label>
          </CustomInput>

          <CustomInput isInputValid={true}>
            <input type="password" id="passwordInp" required />
            <label htmlFor="passwordInp">
              <span>Password</span>
            </label>
          </CustomInput>

          <CustomInput isInputValid={true}>
            <input type="password" id="confirmPasswordInp" required />
            <label htmlFor="confirmPasswordInp">
              <span>Confirm Password</span>
            </label>
          </CustomInput>

          <SchedulerButton
            styleType="default"
            darkMode={true}
            onClick={() => onSubmitClick()}
          >
            Create Account
          </SchedulerButton>
        </SignUpContent>
      </ContentArea>
    </MainContent>
  );
};

export default SignUp;

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

  @media ${(props) => props.theme.breakPoints.mobileS} {
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
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    max-width: 450px;
    width: 450px;
  }
`;

const PageTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: ${palette['default-text-color']};
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
`;


const Description = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
`;

const SignUpContent = styled.div`
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
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

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
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.laptop} {
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.laptopL} {
    max-width: 450px;
    width: 450px;
  }
  @media ${(props) => props.theme.breakPoints.desktop} {
    max-width: 450px;
    width: 450px;
  }
`;

const complexMixin = css`
  position: absolute;
  width: 100px;
  left: 10px;
  top: 10px;
  width: 70px;
  height: 40px;
`;

const InputInlinePair = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
