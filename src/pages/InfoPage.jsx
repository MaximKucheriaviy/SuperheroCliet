import { StyledInfoPage } from "./PageStyles";
import { useParams } from "react-router-dom";
import { editHeroTextData, getHeroByID } from "../service/backAPI";
import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { EditInput } from "../components/EditInput/EditInput";

export const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const [edit, setEdit] = useState(false);
  const editButtonClick = () => {
    setEdit(!edit);
  };
  const onFieldEdit = (fieldName, value) => {
    editHeroTextData(fieldName, id, value)
      .then(() => {
        setData((prev) => {
          prev[fieldName] = value;
          return prev;
        });
        setEdit(false);
      })
      .catch((err) => {
        console.log(`${fieldName} patch error`);
        console.log(err);
      });
  };

  useEffect(() => {
    getHeroByID(id)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <StyledInfoPage>
      <button className="editButton" onClick={editButtonClick}>
        {!edit ? (
          <BsPencilSquare className="svg" />
        ) : (
          <AiOutlineEyeInvisible className="svg" />
        )}
      </button>
      {data && (
        <div>
          <div className="mainInfo">
            <div className="imageThumb">
              {data.Images.length !== 0 && (
                <img src={data.Images[0].url} alt={data.nickname} />
              )}
            </div>
            <div>
              <div>
                {!edit && <h2>{data.nickname}</h2>}
                {edit && (
                  <EditInput
                    className="nicknameInput editInput"
                    label="Nickname"
                    initText={data.nickname}
                    editCallback={onFieldEdit}
                    fieldName="nickname"
                  />
                )}
              </div>
              <div className="realName desc">
                {!edit ? (
                  <p>
                    <span>Real name: </span>
                    {data.real_name}
                  </p>
                ) : (
                  <EditInput
                    className="editInput"
                    label="Real name"
                    initText={data.real_name}
                    editCallback={onFieldEdit}
                    fieldName="real_name"
                  />
                )}
              </div>
              <div className="abilities desc">
                {!edit ? (
                  <p className="abilities desc">
                    <span>Superpowers:</span>
                    {` ${data.superpowers}`}
                  </p>
                ) : (
                  <EditInput
                    className="editInput"
                    label="Superpowers"
                    initText={data.superpowers}
                    multy={true}
                    editCallback={onFieldEdit}
                    fieldName="superpowers"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="description">
            {!edit ? (
              <>
                <h3>Description</h3>
                <p>{data.origin_description}</p>
              </>
            ) : (
              <EditInput
                className="editInput descriptionInput"
                label="Description"
                multy={true}
                initText={data.origin_description}
                editCallback={onFieldEdit}
                fieldName="origin_description"
              />
            )}
            <div className="desc">
              {!edit ? (
                <p>
                  <span>Catch phrase:</span>
                  {` ${data.catch_phrase}`}
                </p>
              ) : (
                <EditInput
                  className="editInput catchPrase"
                  label="Catch phrase"
                  initText={data.catch_phrase}
                  editCallback={onFieldEdit}
                  fieldName="catch_phrase"
                />
              )}
            </div>
          </div>
          {data.Images.length > 1 && (
            <div className="photoSet description">
              <h3>Photos</h3>
              <ul className="photoList">
                {data.Images.map((item) => (
                  <li key={item.id}>
                    <img src={item.url} alt={data.nickname} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </StyledInfoPage>
  );
};
