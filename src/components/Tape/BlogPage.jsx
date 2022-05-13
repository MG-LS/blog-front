import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, Like, loadBlog } from "../../redux/reducers/Blog";
import { getImage } from "../../redux/reducers/image";
import imgComm from "../img/bubble-chat.png";
import imgLike from "../img/heart.png";
import imgLikeRed from "../img/heartRed.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import "./tape.css";

const BlogPage = () => {
  const blog = useSelector((state) => state.blogReducer.blog);
  const idLocal = localStorage.getItem("id");
  const idParams = useParams().id;
  const user = useSelector((state) => state.imgReducer);

  const dispatch = useDispatch();

  const addLikeHandle = (id) => {
    dispatch(Like(id, idLocal));
    console.log(id);
  };

  const deleteLikeHandle = (id) => {
    dispatch(deleteLike(id, idLocal));
    console.log(id);
  };

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);
  return (
    <div>
      {blog.map((item, i) => {
        const likeFind =
          item.likes.length && item.likes.find((i) => i === idLocal);

        return (
          <>
            <div className="tape_blog">
              <div className="tape_blog_div">
                <div>
                  <div>
                    <img
                      className="tape_profile_img"
                      src="https://i.ytimg.com/vi/g9Q84we2dFA/maxresdefault.jpg"
                    />
                    <p>{user.nickname}</p>
                  </div>
                  <div></div>
                </div>
                <Link to={`/post/${item._id}`} className="tape_st">
                  <div key={i}>
                    <img
                      className="tape_img"
                      src={`http://localhost:8000/${item.img}`}
                      alt="photo"
                    />
                  </div>
                  <div className="tape_text">
                    <div>
                      <p className="tape_title">{item.title}</p>
                    </div>
                    <div>
                      <p>{item.text}</p>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="tape_icon">
                {likeFind ? (
                  <img
                    className="tape_img_comm"
                    src={likeFind ? imgLikeRed : imgLike}
                    alt=""
                    onClick={() => deleteLikeHandle(item._id)}
                  />
                ) : (
                  <img
                    className="tape_img_comm"
                    src={likeFind ? imgLikeRed : imgLike}
                    alt=""
                    onClick={() => addLikeHandle(item._id)}
                  />
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BlogPage;
