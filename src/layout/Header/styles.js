import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeaderContainer = styled.header`
  width: 100%;
  height: 25px;
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledLinkContainer = styled(NavLink)`
  text-decoration: none;
  color: red;

  &.active {
    font-weight: bold;
    color: green;
  }
`;
