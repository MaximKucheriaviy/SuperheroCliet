import { StyledInfoPage } from "./PageStyles";
import { useParams } from "react-router-dom";
import {
  editHeroTextData,
  getHeroByID,
  addImages,
  deleteImage,
  delereHero,
} from "../service/backAPI";
import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { EditInput } from "../components/EditInput/EditInput";
import { GrClose } from "react-icons/gr";
import { showLoader, hideLoader } from "../redux/slices";
import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editButtonClick = () => {
    setEdit(!edit);
  };
  const onFieldEdit = (fieldName, value) => {
    dispatch(showLoader());
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
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const onDelete = () => {
    dispatch(showLoader());
    delereHero(id)
      .then(() => {
        navigate("/heroList");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const onDeletePhoto = (photoId) => {
    dispatch(showLoader());
    deleteImage(id, photoId)
      .then(() => {
        getHeroByID(id)
          .then((result) => {
            setData(result.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            dispatch(hideLoader());
          });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };

  const onAddPhoto = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("id", id);
    dispatch(showLoader());
    addImages(formData)
      .then(() => {
        getHeroByID(id)
          .then((result) => {
            setData(result.data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            dispatch(hideLoader());
          });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoader());
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
      {edit && (
        <button className="editButton deleteButton" onClick={onDelete}>
          <RiDeleteBinLine className="svg" />
        </button>
      )}
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
          <div className="photoSet description">
            <h3>Photos</h3>
            {edit && (
              <form className="addPhotoForm" onSubmit={onAddPhoto}>
                <input
                  type="file"
                  name="Image"
                  accept="image/jpeg,image/png,image/gif"
                  multiple
                />
                <button type="submit">add photo</button>
              </form>
            )}
            {data.Images.length > 1 && (
              <ul className="photoList">
                {data.Images.map((item) => (
                  <li key={item.id}>
                    {edit && (
                      <button
                        onClick={() => {
                          onDeletePhoto(item.id);
                        }}
                      >
                        <GrClose />
                      </button>
                    )}
                    <img src={item.url} alt={data.nickname} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </StyledInfoPage>
  );
};
