import styled from 'styled-components';

export const CustomInput = styled.div<{ isInputValid?: boolean }>`
position: relative;
width: 100%;
height: 40px;
margin: 0;
padding: 0;
border: 1px solid
  ${({ isInputValid }) =>
    isInputValid ? 'rgba(56, 62, 86, 0.2)' : '#ff6868'};
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
    isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)'};
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
    isInputValid ? ' rgba(56, 62, 86, 0.4)' : 'rgb(255, 0, 0, .4)'};
}

input:focus + label span {
  color: ${({ isInputValid }) =>
    isInputValid ? ' rgba(56, 62, 86, 0.8)' : 'rgb(255, 0, 0, .8)'};
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
    ${({ isInputValid }) => (isInputValid ? ' #383e56' : '#f60000')};
  transition: all 0.3s ease;
}
`;

