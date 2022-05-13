import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBlog } from "../../redux/reducers/Blog";
const TapePage = () => {
  const dispatch = useDispatch();

  const id = useParams().id;

  const idUser = localStorage.getItem("id");

  const blog = useSelector((state) => state.blogReducer.blog);


  const [comt, setComt] = useState("");

  //   const addComt = () => {
  //     dispatch(postNewsComt(idUser, comt, user));
  //   };
  //   console.log(addComt);

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  return (
    <div className="main">
      {blog.map((item, i) => {
        if (item._id === id) {
          return (
            <>
              <div>
                <div>
                  <div>
                    <img
                      className="tape_img"
                      src={`http://localhost:8000/${item.img}`}
                      alt="photo"
                    />
                  </div>
                </div>
                <div>
                  <h1>{item.title}</h1>
                </div>
                <div>
                  <p>{item.text}</p>
                </div>
                <div className="comt">
                  <input
                    type="text"
                    value={comt}
                    onChange={(e) => setComt(e.target.value)}
                  />
                  <button className="buti">Добавить</button>
                  <div>{/* <NewsComt /> */}</div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default TapePage;
