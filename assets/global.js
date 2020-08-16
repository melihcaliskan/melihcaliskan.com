import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.15s linear;
  }

  a,p,span {
    color: ${({ theme }) => theme.text};
  }

  ::-webkit-scrollbar {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_light};
    height:15px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_light};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_dark};
  }

  ::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.scrollbar_hover};
  }

  ::selection {
    background-color: ${({ theme }) => theme.body_800};
    color: ${({ theme }) => theme.body_200};
  }

  *:focus {
    outline: none; 
    border-radius: 6px;
    box-shadow: 0px 0px 1px ${({ theme }) => theme.body_500},
                0px 0px 2px ${({ theme }) => theme.body_600},
                0px 0px 3px ${({ theme }) => theme.body_700};
  }
`