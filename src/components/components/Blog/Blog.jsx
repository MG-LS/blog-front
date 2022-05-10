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
  const [photo, setPhoto] = useState("")
  const [preview, setPreview] = useState('')

  const addBlogText = () => {
    console.log(photo)
    dispatch(addBlog(photo, idUser, blogTitle, blogText));
  };

  useEffect(() => {
    if (photo) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      };
      reader.readAsDataURL(photo)
    } else {
      setPreview(null)
    }
  }, [dispatch, photo]);

  return (
    <>
      <BlogHeader />
      <div className="blog_text">
        <div className="form-group">
          <label className="control-label col-sm-23" htmlFor="comment">
            Выберите файл:
          </label>
          <div className="col-sm-10">
          <input
                type="file"
                id="upload"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.substring(0, 5) === "image") {
                    setPhoto(file);
                  } else {
                    setPhoto(null);
                  }
                }}
                />
            {preview ? (
                <>
                  <img src={preview} alt="" />
                  <label htmlFor="upload">
                    <ion-icon name="create-outline"></ion-icon>
                  </label>{" "}
                </>
              ) : (
                <label htmlFor="upload">
                  <img
                    style={{'width': '30px'}}
                    src="https://www.babypillowth.com/images/templates/upload.png"
                    alt=""
                  />
                </label>
              )}
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="fname">
              Название блога:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Введите название"
                name="fname"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}

              />
            </div>
          </div>

          <div className="form-group">
            <label class="control-label col-sm-2" htmlFor="comment">
              Введите текст:
            </label>
            <div className="col-sm-10">
              <input value={blogText} className="form-control" rows="5" id="comment" onChange={(e) => setBlogText(e.target.value)}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <Button className="headerBtn" onClick={() => addBlogText()}>Опубликовать</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
