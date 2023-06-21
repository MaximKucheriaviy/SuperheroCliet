import { StyledHeader, StyledLink } from "./HeaderStyled";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Superhero database</h1>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/heroList">All Heroes</StyledLink>
        </li>
        <li>
          <StyledLink to="/createHero">Add hero</StyledLink>
        </li>
      </ul>
    </StyledHeader>
  );
};
