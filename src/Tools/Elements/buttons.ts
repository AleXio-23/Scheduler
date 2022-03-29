import { width } from "@mui/system";
import styled from "styled-components";

export const DefaultButton = styled.button<{
  mode?: "dark" | "light";
  width?: string;
  height?: string;
}>`
  background: ${(props) =>
    props.theme.palette[props?.mode || "dark"].backgroundColor};
  color: ${({theme, mode}) => theme.palette[mode || "dark"].textColor};

  border: 1px solid black;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  width: ${(props) => props?.width || "auto"};
  height: ${(props) => props?.height || "auto"};
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

// const Div = styled.div`
//     background:  ${(props) => props.theme.palette.light.background};
//     @media ${props => props.theme.breakPoints.mobileL} {
//         max-width: 1400px;
//     }
