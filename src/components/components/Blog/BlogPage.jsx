import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBlog } from "../../../redux/reducers/Blog";

const BlogPage = () => {
  const blog = useSelector((state) => state.blogReducer.blog);
  const id = localStorage.getItem("id");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);
  return (
    <div>
      {blog.map((item, i) => {
        return (
          <div>
            <div key={i}>
              <img src={`http://localhost:8000/${item.img}`} alt="photo" />

            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div>
              <p>{item.text}</p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
