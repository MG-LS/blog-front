import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./userprofile.style.css";
import { addSub, deleteSub, fetchOneUser } from "../../../redux/fearutes/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.users.loading);
  const { id } = useParams();
  const oneUser = useSelector((state) => state.users.user);
  const myId = localStorage.getItem("id");

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch]);

  const addSubs = () => {
    dispatch(addSub(myId, id));
  };
  const deleteSubs = () => {
    dispatch(deleteSub(myId, id));
  }
  if (loader) {
    return "Loader";
  }
  const subscribtion = oneUser.subscrib.find(
    (item) => item.subscribtion === myId
  );

  return (
    <div className="userProfile__lol-kek">
      <Header />
      <div className="border__radius-deni">
        <div className="main_div-deni">
          <div className="photo_back-deni">
            <div className="profile-img-deni">
              <img
                className="img-deni"
                src={`http://localhost:8000/${oneUser.img}`}
              />
              <span className="id_p-deni">{oneUser.nickname}</span>
            </div>
            {loader && <div>Загрузка</div>}
            <div className="button__edit__profile-deni">
              {subscribtion ? (
                <button className="button-deni deni_btn-2" 
                  onClick={deleteSubs}
                  >
                  Отписаться
                </button>
              ) : (
                <button
                  className="button-deni deni_btn"
                  onClick={addSubs}
                >
                  Подписаться
                </button>
              )}
            </div>
            <div>
              <p className="joined__to-deni">{oneUser.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-deni">
        <h1>Посты</h1>
      </div>
    </div>
  );
};

export default UserProfile;
