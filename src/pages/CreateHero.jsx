import { CreateHeroPageStyled } from "./PageStyles";
import { v4 } from "uuid";
import { useRef } from "react";
import { useState } from "react";
import { createHero } from "../service/backAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../redux/slices";

export const CreateHero = () => {
  const nicknameID = useRef(v4());
  const realNameID = useRef(v4());
  const superpowersID = useRef(v4());
  const descriptioID = useRef(v4());
  const catchPhrase = useRef(v4());

  const [nickname, setNickName] = useState("");
  const [realName, setRealName] = useState("");
  const [surperposers, setSuperPosers] = useState("");
  const [description, setDescription] = useState("");
  const [catchFrase, setCatchFrase] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChage = ({ target }) => {
    switch (target.name) {
      case "nickname":
        setNickName(target.value);
        break;
      case "real_name":
        setRealName(target.value);
        break;
      case "superpowers":
        setSuperPosers(target.value);
        break;
      case "origin_description":
        setDescription(target.value);
        break;
      case "catch_phrase":
        setCatchFrase(target.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatch(showLoader());
    createHero(formData)
      .then((data) => {
        navigate(`/hero/${data._id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const onFileLoad = (event) => {
    console.log(event);
  };
  return (
    <CreateHeroPageStyled>
      <form className="addForm" onSubmit={onSubmit}>
        <div className="inputField">
          <label htmlFor={nicknameID.current}>Nickname</label>
          <input
            type="text"
            id={nicknameID.current}
            name="nickname"
            value={nickname}
            onChange={onChage}
          />
        </div>
        <div className="inputField">
          <label htmlFor={realNameID.current}>Real name</label>
          <input
            type="text"
            id={realNameID.current}
            name="real_name"
            value={realName}
            onChange={onChage}
          />
        </div>
        <div className="textArea inputField ">
          <label htmlFor={superpowersID.current}>Superpowers</label>
          <textarea
            name="superpowers"
            cols="20"
            rows="10"
            id={superpowersID.current}
            value={surperposers}
            onChange={onChage}
          ></textarea>
        </div>
        <div className="textArea inputField ">
          <label htmlFor={descriptioID.current}>Description</label>
          <textarea
            name="origin_description"
            cols="20"
            rows="10"
            id={descriptioID.current}
            value={description}
            onChange={onChage}
          ></textarea>
        </div>
        <div className="inputField">
          <label htmlFor={catchPhrase.current}>Catch phrase</label>
          <input
            name="catch_phrase"
            type="text"
            id={catchPhrase.current}
            value={catchFrase}
            onChange={onChage}
          ></input>
        </div>
        <div className="inputField">
          <label htmlFor={superpowersID.current}>Photo</label>
          <input
            accept="image/jpeg,image/png,image/gif"
            type="file"
            multiple
            id={catchPhrase.current}
            onChange={onFileLoad}
            name="Image"
          ></input>
        </div>
        <button type="submit">Add hero</button>
      </form>
    </CreateHeroPageStyled>
  );
};
