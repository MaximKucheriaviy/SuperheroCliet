import { useDispatch } from "react-redux";
import { getHeros } from "../redux/operations";
import { HeroList } from "../components/HeroList/HeroList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { StyledHeroListPage } from "./PageStyles";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";

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
    <StyledHeroListPage>
      <HeroList list={heroes} />
      <div className="paginationButtons">
        <button onClick={onPrev}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={onNext}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </StyledHeroListPage>
  );
};
