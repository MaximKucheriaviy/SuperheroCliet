import { CreateHeroPageStyled } from "./PageStyles";
import { v4 } from "uuid";
import { useRef } from "react";

export const CreateHero = () => {
  const nicknameID = useRef(v4());
  const realNameID = useRef(v4());
  const superpowersID = useRef(v4());
  const descriptioID = useRef(v4());
  const catchPhrase = useRef(v4());
  return (
    <CreateHeroPageStyled>
      <form className="addForm">
        <div className="inputField">
          <label htmlFor={nicknameID.current}>Nickname</label>
          <input type="text" id={nicknameID.current} />
        </div>
        <div className="inputField">
          <label htmlFor={realNameID.current}>Real name</label>
          <input type="text" id={realNameID.current} />
        </div>
        <div className="textArea inputField ">
          <label htmlFor={superpowersID.current}>Superpowers</label>
          <textarea
            name=""
            cols="20"
            rows="10"
            id={superpowersID.current}
          ></textarea>
        </div>
        <div className="textArea inputField ">
          <label htmlFor={descriptioID.current}>Description</label>
          <textarea
            name=""
            cols="20"
            rows="10"
            id={descriptioID.current}
          ></textarea>
        </div>
        <div className="inputField">
          <label htmlFor={catchPhrase.current}>Catch phrase</label>
          <input type="text" id={catchPhrase.current}></input>
        </div>
        <div className="inputField">
          <label htmlFor={superpowersID.current}>Photo</label>
          <input type="file" multiple id={catchPhrase.current}></input>
        </div>
        <button type="submit">Add hero</button>
      </form>
    </CreateHeroPageStyled>
  );
};
