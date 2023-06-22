import styled from "styled-components";

export const StyledMain = styled.main`
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
`;

export const StyledMainPage = styled(StyledMain)`
  background-image: url("./backgroundSuper.jpg");
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  gap: 40px;
  & a {
    width: 250px;
    height: 100px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: brown;
    border-radius: 70px;
    font-size: 30px;
    font-weight: 700;
    color: white;
    box-shadow: 0px 0px 10px black;
    &:hover {
      background-color: #a84444;
    }
  }
`;

export const StyledInfoPage = styled(StyledMain)`
  line-height: 1.5;
  position: relative;
  & .addPhotoForm {
    margin-bottom: 40px;
    & button {
      width: 100px;
      height: 30px;
    }
  }
  & .editInput {
    display: flex;
    gap: 30px;
    align-items: center;
    & button {
      width: 100px;
      height: 30px;
    }
    & input {
      display: block;
    }
  }
  & .editButton {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: transparent;
    & .svg {
      width: 50%;
      height: 50%;
    }
  }
  & .deleteButton {
    right: 100px;
    background-color: #ff6600;
    &:hover {
      background-color: #ff0000;
    }
  }
  & .mainInfo {
    display: flex;
    gap: 60px;
    & .imageThumb {
      width: 350px;
      min-height: 200px;
      border: 1px solid gray;
      flex-shrink: 0;
    }
    & h2,
    .nicknameInput {
      font-size: 40px;
    }

    & .nicknameInput {
      & input {
        width: 400px;
        font-size: 40px;
      }
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
    & .photoList {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      & li {
        position: relative;
        width: 30%;
        & button {
          position: absolute;
          top: 10px;
          right: 10px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          background-color: #ffffff6a;

          &:hover {
            background-color: #ffffff;
          }
        }
      }
    }
  }

  & .descriptionInput {
    font-size: 36px;
    flex-direction: column;
    align-items: flex-start;
    & textarea {
      display: block;
      resize: none;
      width: 800px;
    }
  }

  & .catchPrase {
    & input {
      width: 600px;
    }
  }
`;

export const CreateHeroPageStyled = styled(StyledMain)`
  & .addForm {
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    & .inputField {
      margin-top: 20px;
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: space-between;
    }
    & label {
      font-size: 24px;
      display: block;
    }
    & input {
    }
    & input,
    textarea {
      width: 600px;
      font-size: 24px;
      display: block;
      border-radius: 20px;
      resize: none;
      padding-left: 20px;
      padding-right: 20px;
    }
    & .textArea {
      align-items: flex-start;
    }
    & button {
      width: 200px;
      height: 70px;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      font-size: 34px;
    }
  }
`;

export const StyledHeroListPage = styled(StyledMain)`
  & .paginationButtons {
    margin-top: 40px;
    display: flex;
    gap: 30px;
    justify-content: center;
    & button {
      border: 2px solid gray;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      & svg {
        width: 80%;
        height: 80%;
      }
    }
  }
`;
