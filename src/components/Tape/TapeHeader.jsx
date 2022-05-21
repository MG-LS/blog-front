import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../redux/reducers/image";
import { Link, useParams } from "react-router-dom";
import { addSub, fetchUsers } from "../../redux/fearutes/user";

const TapeHeader = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myId = localStorage.getItem("id");
  const userImg = useSelector((state) =>
    state.imgReducer.users.find((user) => user.img)
  );
  const userBlog = useSelector((state) => state.blogReducer.blog);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  if (!users) {
    return "loading...";
  }
  if (!userImg) {
    return "loading...";
  }
  return (
    <div className="tape_header_main">
      <div className="tape_header_blog">
        {userBlog.map((item) => {
          return users.map((user) => {
            if (item._id === id && item.user === user._id) {
              return (
                <div className="tape_profile_post" key={item._id}>
                  {myId === user._id ? (
                    <Link to={`/profile/${myId}`}>
                      <img
                        className=""
                        src={`http://localhost:8000/${user.img}`}
                      />
                      <div>
                        <span className="header__nickaname">
                          {user.nickname}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <Link to={`/user/${user._id}`}>
                      <img
                        className=""
                        src={`http://localhost:8000/${user.img}`}
                      />
                      <div>
                        <span className="header__nickaname">
                          {user.nickname}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default TapeHeader;
