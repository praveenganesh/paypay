import styled, { css } from 'styled-components';

const GetBoxsizing = () => css`
  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

export default GetBoxsizing;
