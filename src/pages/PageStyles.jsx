import styled from "styled-components";

export const StyledMain = styled.main`
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const StyledInfoPage = styled(StyledMain)`
  line-height: 1.5;
  & .mainInfo {
    display: flex;
    gap: 60px;
    & .imageThumb {
      width: 350px;
      min-height: 200px;
      border: 1px solid gray;
      flex-shrink: 0;
    }
    & h2 {
      font-size: 40px;
    }
    & .realName {
      margin-top: 30px;
      & span {
        font-weight: 700;
      }
    }
    & .desc {
      font-size: 20px;
      & span {
        font-weight: 700;
      }
    }
    & .abilities {
      margin-top: 20px;
    }
  }
  & .description {
    border-top: 2px solid black;
    margin-top: 40px;
    padding-bottom: 20px;
    & h3 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    & p {
      font-size: 18px;
    }
    & .desc {
      & span {
        font-weight: 700;
      }
    }
  }
`;
