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

const Comments = () => {
  const [comt, setComt] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();

  const idLocal = localStorage.getItem("id");

  const blogComt = useSelector((state) => state.commentsReducer.comments);
  console.log(blogComt);

  const userImg = useSelector((state) =>
    state.imgReducer.users.find((user) => user)
  );
  console.log(userImg);

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
                  Submit
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
              <div>
                {blogComt.map((item) => {
                  if (item.blog === id) {
                    return (
                      <div>
                        <div className="comt_img">
                          <img src="" alt="" />
                        </div>
                        <div>
                          <p>{}</p>
                          <div>
                            <p>{item.text}</p>
                          </div>
                        </div>
                        <div>
                          <button onClick={() => removeComt(item._id)}>
                            X
                          </button>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
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
