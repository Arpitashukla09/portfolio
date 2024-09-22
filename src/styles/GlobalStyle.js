// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif; /* Change to your preferred font */
    background-color: #0d0d0d; /* Dark background for the entire app */
    color: #ffffff; /* Default text color */
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  html, body, #root {
    height: 100%; /* Ensure full height for root element */
  }

  section {
    height: 100vh; /* Set sections to full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
