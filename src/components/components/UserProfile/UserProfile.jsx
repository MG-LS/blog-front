import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import "./userprofile.style.css";
import { addSub, deleteSub, fetchOneUser } from "../../../redux/fearutes/user";
import { loadBlog } from "../../../redux/reducers/Blog";
import { createConversation } from "../../../redux/reducers/Messenger";

const UserProfile = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.users.loading);
  const { id } = useParams();
  const oneUser = useSelector((state) => state.users.user);
  const myId = localStorage.getItem("id");
  const posts = useSelector((state) => state.blogReducer.blog)

  
  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadBlog())
  }, [dispatch])
  const addSubs = () => {
    dispatch(addSub(myId, id));
  };
  const deleteSubs = () => {
    dispatch(deleteSub(myId, id));
  }
  // if (loader) {
  //   return "Loader";
  // }
  // if (!posts) {
  //   return "Loader";
  // }
  const startConversation = (senderId, receiverId) => {
    dispatch(createConversation(senderId, receiverId))

  if (!posts) {
    return "Loader";
  }
  const subscribtion = oneUser.subscrib?.find(
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
              <button onClick={() => startConversation(myId, id)}>
                <Link to={"/messenger"}>
                Написать
                </Link>
              </button>
            </div>
            <div>
              <p className="joined__to-deni">{oneUser.email}</p>
            </div>
      <div className="posts-deni">
        <h1>Посты</h1>
        {posts.map((item) => {
          if (item.user === id) {
            return (
              <div className="tape_info" key={item._id}>
              <Link to={`/post/${item._id}`} className="link">
                <div className="tape_info_main">
                  <div className="tape_text_info">
                    <div>
                      <p className="tape_title">{item.title}</p>
                    </div>
                    <div className="tape_text">
                      <p>{item.text.substr(0, 200) + "..."}</p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="tape_img"
                      src={`http://localhost:8000/${item.img}`}
                      alt="photo"
                    />
                  </div>
                </div>
              </Link>
            </div>
              )
          }
          
        })}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
