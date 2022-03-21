import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledLinkContainer,
  StyledNavContainer,
} from "./styles";

const Header = () => (
  <StyledHeaderContainer>
    <StyledNavContainer>
      <StyledLinkContainer to="/publications">Publications</StyledLinkContainer>
      <StyledLinkContainer to="/evenements">Événements</StyledLinkContainer>
      <StyledLinkContainer to="/contacts">Contact</StyledLinkContainer>
      <StyledLinkContainer to="/clubs">Liste des clubs</StyledLinkContainer>
    </StyledNavContainer>
  </StyledHeaderContainer>
);

export default Header;
