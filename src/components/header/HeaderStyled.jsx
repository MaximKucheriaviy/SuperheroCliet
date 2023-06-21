import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  border-bottom: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: green;
`;
