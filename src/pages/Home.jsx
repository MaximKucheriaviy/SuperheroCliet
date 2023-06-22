import { StyledMainPage } from "./PageStyles";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <StyledMainPage>
      <NavLink to="/heroList">Show heroes</NavLink>
      <NavLink to="/createHero">Create hero</NavLink>
    </StyledMainPage>
  );
};
