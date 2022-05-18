import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, Like, loadBlog } from "../../redux/reducers/Blog";
import { getImage } from "../../redux/reducers/image";
import imgComm from "../img/bubble-chat.png";
import imgLike from "../img/heart.png";
import imgMark from "../img/bookmark.png";
import imgMarkBlack from "../img/bookmarkBlack.png";
import imgLikeRed from "../img/heartRed.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import "./tape.css";
import { fetchUsers } from "../../redux/fearutes/user";

const BlogPage = () => {
  const blog = useSelector((state) => state.blogReducer.blog);
  const idLocal = localStorage.getItem("id");
  const idParams = useParams().id;
  const users = useSelector((state) => state.users.users);

  const userImg = useSelector((state) =>
    state.imgReducer.users.find((user) => user.img)
  );

  const userBlog = useSelector((state) =>
    state.imgReducer.users.find((user) => user)
  );
  const dispatch = useDispatch();

  const addLikeHandle = (id) => {
    dispatch(Like(id, idLocal));
  };

  const deleteLikeHandle = (id) => {
    dispatch(deleteLike(id, idLocal));
  };

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (!users) {
    return "loading";
  }
  // console.log(user);
  // console.log(blog);
  if (!userImg) {
    return "loading...";
  }
  return (
    <div className="tape_main">
      {blog.map((item, i) => {
        const likeFind =
          item.likes.length && item.likes.find((i) => i === idLocal);

        return (
          <>
            <div className="tape_map_main">
              <div className="tape_blog">
                {users.map((user) => {
                  if (user._id === item.user) {
                    return (
                      <div className="tape_header">
                        <div>
                          <img
                            className=""
                            src={`http://localhost:8000/${user.img}`}
                          />
                        </div>
                        <p>{user.nickname}</p>
                      </div>
                    );
                  }
                })}

                <div className="tape_info">
                  <Link to={`/post/${item._id}`} className="link">
                    <div className="tape_info_main">
                      <div className="tape_text_info">
                        <div>
                          <p className="tape_title">{item.title}</p>
                        </div>
                        <div className="tape_text">
                          <p>{item.text.substr(0, 200) + "..."}</p>{" "}
                        </div>
                      </div>
                      <div key={i}>
                        <img
                          className="tape_img"
                          src={`http://localhost:8000/${item.img}`}
                          alt="photo"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="tape_footer">
                  <img src={imgMark} alt="" />
                  {likeFind ? (
                    <img
                      className="tape_like"
                      src={likeFind ? imgLikeRed : imgLike}
                      alt=""
                      onClick={() => deleteLikeHandle(item._id)}
                    />
                  ) : (
                    <img
                      className="tape_like"
                      src={likeFind ? imgLikeRed : imgLike}
                      alt=""
                      onClick={() => addLikeHandle(item._id)}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BlogPage;
