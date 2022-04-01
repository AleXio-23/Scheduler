// import { width } from '@mui/system';
import styled, { CSSProp } from 'styled-components';
import constPalletes from '../palette';

export const SchedulerButton = styled.button<{
  styleType?: 'default' | 'primary' | 'secondary';
  darkMode?: true | false;
  customStyle?: CSSProp;
}>`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${(props) =>
    props.darkMode ?
      props?.styleType === 'default' ?
        props.theme.palette.buttons.dark.textLight :
         '' :
      ''};
  background-color: ${(props) =>
    props.styleType ?
      props.theme.palette.buttons[props?.darkMode ? 'dark' : 'light'][
          props.styleType
      ] :
      'transparent'};
  border: ${(props) =>
    props.styleType === 'secondary' ?
      `1px solid ${constPalletes['background-default']}` :
      'none'};
  border-radius: 5px;
  font-weight: 600 !important;
  &:hover {
    background-color: ${({ darkMode, styleType, theme }) =>
      darkMode ?
        styleType === 'primary' ?
          theme.palette.buttons.dark.primaryHover :
          styleType === 'secondary' ?
          theme.palette.buttons.dark.secondaryHover :
          theme.palette.buttons.dark.defaultHover :
        ''};

    transition: background-color 0.3s ease;
  }
  

  &:disabled {
    background-color: ${({ darkMode, styleType, theme }) =>
      darkMode ?
        styleType === 'primary' ?
          theme.palette.buttons.dark.primaryHover :
          styleType === 'secondary' ?
          theme.palette.buttons.dark.secondaryHover :
          theme.palette.buttons.dark.defaultHover :
        ''};
  };
${(props) => props.customStyle};

`;

// const Div = styled.div`
//     background:  ${(props) => props.theme.palette.light.background};
//     @media ${props => props.theme.breakPoints.mobileL} {
//         max-width: 1400px;
//     }
