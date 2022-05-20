import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBlog } from "../../redux/reducers/Blog";
import { loadBlogComments } from "../../redux/reducers/CommentBlog";
import Comments from "./Comments";
import TapeHeader from "./TapeHeader";
const TapePage = () => {
  const dispatch = useDispatch();

  const id = useParams().id;

  const idUser = localStorage.getItem("id");

  const blog = useSelector((state) => state.blogReducer.blog);




  //   const addComt = () => {
  //     dispatch(postNewsComt(idUser, comt, user));
  //   };
  //   console.log(addComt);

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  return (
    <>
      <TapeHeader />
      <div className="tape_main_blog">
        {blog.map((item, i) => {
          if (item._id === id) {
            return (
              <>
                <div className="tape_blog_main">
                  <div className="tape_blog_info">
                    <div className="tape_blog_img">
                      <img
                        className="tape_img"
                        src={`http://localhost:8000/${item.img}`}
                        alt="photo"
                      />
                    </div>
                    <div className="tape_blog_title">
                      <h1>{item.title}</h1>
                    </div>
                    <div className="tape__text">
                      <p>{item.text}</p>
                    </div>
                    <Comments/>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default TapePage;
