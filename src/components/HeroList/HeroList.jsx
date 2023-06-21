import { StyledLHeroList } from "./HeroListStyled";
import { HeroListItem } from "./HeroListItem/HeroListItem";

export const HeroList = ({ list = [] }) => {
  return (
    <StyledLHeroList>
      {list.map((item) => (
        <HeroListItem
          key={item._id}
          nickname={item.nickname}
          imagePath={item.Images.length !== 0 ? item.Images[0].url : ""}
          id={item._id}
        />
      ))}
    </StyledLHeroList>
  );
};
