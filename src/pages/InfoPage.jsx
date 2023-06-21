import { StyledInfoPage } from "./PageStyles";
import { useParams } from "react-router-dom";
import { getHeroByID } from "../service/backAPI";
import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getHeroByID(id)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(data);
  return (
    <StyledInfoPage>
      <NavLink to={`/editHero/${id}`} className="editButton">
        <BsPencilSquare className="svg" />
      </NavLink>
      {data && (
        <div>
          <div className="mainInfo">
            <div className="imageThumb">
              {data.Images.length !== 0 && (
                <img src={data.Images[0].url} alt={data.nickname} />
              )}
            </div>
            <div>
              <h2>{data.nickname}</h2>
              <p className="realName desc">
                <span>Real name: </span>
                {data.real_name}
              </p>
              <p className="abilities desc">
                <span>Superpowers:</span>
                {` ${data.superpowers}`}
              </p>
            </div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{data.origin_description}</p>
            <p className="desc">
              <span>Catch phrase:</span>
              {` ${data.catch_phrase}`}
            </p>
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
