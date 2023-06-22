import styled from "styled-components";

export const StyledMain = styled.main`
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
`;

export const StyledInfoPage = styled(StyledMain)`
  line-height: 1.5;
  position: relative;
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
        width: 30%;
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
