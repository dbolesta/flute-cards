import { css } from 'styled-components';
import { normalize } from './normalize';

export const globalStyles = css`
  /* @import url('https://fonts.googleapis.com/css?family=Tenor+Sans&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css?family=Nunito:400,700'); */

  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Nunito';
  }
`;
