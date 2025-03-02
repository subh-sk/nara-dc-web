import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0066ff;
    --primary-dark: #0044cc;
    --primary-light: #4d94ff;
    --secondary: #00ccff;
    --dark: #001a33;
    --light: #e6f2ff;
    --white: #ffffff;
    --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--dark);
    color: var(--light);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-light);
  }
`;

export default GlobalStyles;