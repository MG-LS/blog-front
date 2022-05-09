import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../../redux/reducers/Blog";
import BlogHeader from "./BlogHeader";

const Blog = () => {

  const dispatch = useDispatch();
  const idUser = localStorage.getItem("id");


  const textBlog = useSelector((state) => state.blogReducer);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  const [blogImg, setBlogImg] = useState("");

  const addBlogText = () => {
    dispatch(addBlog(blogTitle, blogText, blogImg, idUser ));
  };

  // useEffect(() => {
  //   dispatch(loadTodos());
  // }, [dispatch]);

  return (
    <>
      <BlogHeader />
      <div className="blog_text">
        <div class="form-group">
          <label class="control-label col-sm-23" for="comment">
            Выберите файл:
          </label>
          <div class="col-sm-10">
            <input type="file" rows="5" id="comment"></input>
          </div>
        </div>
        <div class="contact-form">
          <div class="form-group">
            <label class="control-label col-sm-2" for="fname">
              Название блога:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="fname"
                placeholder="Введите название"
                name="fname"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}

              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="comment">
              Введите текст:
            </label>
            <div class="col-sm-10">
              <input value={blogText} class="form-control" rows="5" id="comment" onChange={(e) => setBlogText(e.target.value)}></input>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <Button className="headerBtn" onClick={() => addBlogText()}>Опубликовать</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
