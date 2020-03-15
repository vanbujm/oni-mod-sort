import { css } from '@emotion/core';
import 'typeface-oxanium';

export const globalStyles = css`
  html {
    height: 100%;

    font-family: oxanium, Arial, serif;
  }
  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    flex: 1;
  }
`;
