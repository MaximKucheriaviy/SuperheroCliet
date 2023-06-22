import { useDispatch } from "react-redux";
import { getHeros } from "../redux/operations";
import { HeroList } from "../components/HeroList/HeroList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledMain } from "./PageStyles";
import { useState } from "react";

export const HeroListPage = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes.items.data);
  const totalPages = useSelector((state) => state.heroes.items.totalPages);

  const [page, setPage] = useState(1);

  const onNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  const onPrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  console.log(heroes);
  useEffect(() => {
    dispatch(getHeros(page));
  }, [dispatch, page]);
  return (
    <StyledMain>
      <HeroList list={heroes} />
      <div>
        <button onClick={onPrev}>prev</button>
        <button onClick={onNext}>next</button>
      </div>
    </StyledMain>
  );
};
