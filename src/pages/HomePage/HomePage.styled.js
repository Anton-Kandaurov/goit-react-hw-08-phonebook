import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #ffdbdb;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: #7519d2;
  }
`;
