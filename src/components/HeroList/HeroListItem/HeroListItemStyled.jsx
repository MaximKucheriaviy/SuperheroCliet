import styled from "styled-components";
export const HeroListItemStyled = styled.li`
  width: 300px;
  border: 2px solid black;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
  padding-top: 10px;
  text-align: center;
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 0px 10px black;
  }
  & p {
    color: black;
    font-size: 20px;
    font-weight: 700;
  }
  & .image-thumb {
    width: 276px;
    height: 276px;
    border: 1px solid gray;
    overflow: hidden;
  }
`;
