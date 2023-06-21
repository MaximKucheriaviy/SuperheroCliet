import { HeroListItemStyled } from "./HeroListItemStyled";
import { NavLink } from "react-router-dom";

export const HeroListItem = ({ nickname, imagePath, id }) => {
  return (
    <HeroListItemStyled>
      <NavLink to={`/hero/${id}`}>
        <div className="image-thumb">
          <img src={imagePath} alt={nickname} />
        </div>
        <p>{nickname}</p>
      </NavLink>
    </HeroListItemStyled>
  );
};
