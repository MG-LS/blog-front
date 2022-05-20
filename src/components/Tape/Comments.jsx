import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./comments.css";
import {
  deleteBlogComments,
  loadBlogComments,
  postBlogComt,
} from "../../redux/reducers/CommentBlog";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../redux/fearutes/user";

const Comments = () => {
  const [comt, setComt] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();

  const idLocal = localStorage.getItem("id");

  const blogComt = useSelector((state) => state.commentsReducer.comments);


  const users = useSelector((state) => state.users.users);


  const addComt = (e) => {
    e.preventDefault();
    dispatch(postBlogComt(id, comt, idLocal));
  };

  const removeComt = (id) => {
    dispatch(deleteBlogComments(id));
  };

  useEffect(() => {
    dispatch(loadBlogComments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <section class="content-item" id="comments">
      <div class="container_comments">
        <div class="row">
          <div class="col-sm-8">
            <form>
              {}
              <div className="info_user_comt">
                <h3 class="pull-left">New Comment</h3>
                <button
                  type="submit"
                  class="btn btn-normal pull-right"
                  onClick={(e) => addComt(e)}
                >
                  Сomment
                </button>
              </div>

              <fieldset>
                <div class="row">
                  <div class="col-sm-3 col-lg-2 hidden-xs">
                    <img
                      class="img-responsive"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    {users.map((user) => {
                      if (user._id === idLocal) {
                        return (
                          <img
                            class="img-responsive"
                            src={`http://localhost:8000/${user.img}`}
                            alt=""
                          />
                        );
                      }
                    })}
                  </div>
                  <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                    <textarea
                      class="form-control"
                      value={comt}
                      onChange={(e) => setComt(e.target.value)}
                      id="message"
                      placeholder="Your message"
                      required=""
                    ></textarea>
                  </div>
                </div>
              </fieldset>
            </form>

            <h3>4 Comments</h3>
            {/*                 
                <!-- COMMENT 1 - START --> */}
            <div class="media">
              {blogComt.map((item) => {
                if (item.blog === id) {
                  return (
                    <div className="prof_comt_main">
                      <div>
                        {users.map((user) => {
                          if (user._id === item.user) {
                            return (
                              <div className="prof_comt">
                                <p>{user.nickname}</p>
                                <div>
                                  <img
                                    className=""
                                    src={`http://localhost:8000/${user.img}`}
                                  />
                                </div>
                                <button
                                  onClick={
                                    item.user === idLocal
                                      ? () => removeComt(item._id)
                                      : null
                                  }
                                >
                                  Удалить
                                </button>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <div className="comt_text">
                        <div>
                          <p>{item.text}</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="comt_main">
    //   <div className="comt">
    //     <div className="comt_info">
    //       <input
    //         type="text"
    //         value={comt}
    //         onChange={(e) => setComt(e.target.value)}
    //       />
    //       <button className="buti">Добавить</button>
    //       <div>{/* <NewsComt /> */}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Comments;
