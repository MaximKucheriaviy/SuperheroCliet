import { useDispatch } from "react-redux";
import { getHeros } from "../redux/operations";
import { HeroList } from "../components/HeroList/HeroList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledMain } from "./PageStyles";

export const HeroListPage = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes.items.data);
  console.log(heroes);
  useEffect(() => {
    dispatch(getHeros());
  }, [dispatch]);
  return (
    <StyledMain>
      <HeroList list={heroes} />
    </StyledMain>
  );
};
