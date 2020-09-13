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
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  /* MENU */

  .menu{
    position:relative;
  }

  .menu input {
    display: none;
  }

  .menu label {
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .menu label svg{
    position:absolute;
    top:-15px;
    left:-15px;
    width:72px;
    height:72px;
  }

  .menu path {
    fill: none;
    stroke: ${({ theme }) => theme.body_900};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all .4s cubic-bezier(.645, .045, .355, 1);
  }

  .cross input:checked+svg .line--1,
  .cross input:checked+svg .line--3 {
    --length: 22.627416998;
  }

  .cross input:checked+svg .line--2 {
    --length: 0;
  }

  .back input:checked+svg .line--1,
  .back input:checked+svg .line--3 {
    --length: 8.602325267;
  }

  .menu .line--1,
  .menu .line--3 {
    --total-length: 111.22813415527344;
    --offset: -50.22813415527344;
  }

  .menu .line--2 {
    --total-length: 99;
  }

  .menu input:checked+svg path {
    transform: translateX(30px);
  }

  .menu input:checked+svg .line--1,
  .menu input:checked+svg .line--3 {
    --offset: -16.9705627485;
  }

  .menu input:checked+svg .line--2 {
    --offset: -20;
  }
`