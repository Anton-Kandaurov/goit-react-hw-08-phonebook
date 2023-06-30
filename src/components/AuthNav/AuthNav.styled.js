import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: '#7519d2';
  }

  &.active {
    color: #7519d2;
  }
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  gap: 25px;
  align-items: baseline;
`;
