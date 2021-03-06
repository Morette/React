import { createGlobalStyle } from 'styled-components';

import background from '../assets/github-background.svg';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
   }

   body {
      background: #f0f0f5 url(${background}) no-repeat 70% top;
   }

   body, input, button {
      font: 16px Roboto, sans-serif;
   }

   button {
      cursor: pointer;
   }

   #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
   }
`;
