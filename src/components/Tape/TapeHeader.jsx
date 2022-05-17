import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../redux/reducers/image";
import { useParams } from "react-router-dom";

const TapeHeader = () => {

  const dispatch = useDispatch();

  const idLocal = localStorage.getItem("id");
  const { id } = useParams();


  const userImg = useSelector((state) =>
    state.imgReducer.users.find((user) => user.img)
  );



  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);


  if (!userImg) {
    return "loading...";
  }

  return (
    <>
      <div className="tape_header_main">
        <div className="tape_header_blog">
          <div className="tape_profile_post">
            <img className="" src={`http://localhost:8000/${userImg.img}`} />
            <p>{userImg.nickname}</p>
          </div>
          <div className="tape_profile_user">
            <button type="button" 
            // onClick={() => addSub(id)}
            class="btn btn-outline-primary">
              Подписаться
            </button>
            <div>
            <img className="" src={`http://localhost:8000/${userImg.img}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapeHeader;
