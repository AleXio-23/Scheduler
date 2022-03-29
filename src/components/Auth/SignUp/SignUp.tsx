import palette from "../../../Tools/palette";
import styled from "styled-components";
import { DefaultButton } from "../../../Tools/Elements/buttons";
import constPalletes from "../../../Tools/palette";
import { useState } from "react";

const SignUp = () => {
  return (
    <MainContent>
      <ContentArea>
        <PageTitle>SHEDULER</PageTitle>
        <Descript>Recover Password</Descript>
        <RecoveryContent>
            COntent
        </RecoveryContent>
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

const PageTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: ${palette["default-text-color"]};
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
`;

const Descript = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
`;




const RecoveryContent = styled.div`
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
