import { css } from 'styled-components';
import normalize from './normalize';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Tenor+Sans&display=swap');

  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Tenor Sans';
  }
`;
