import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { loadBlog } from "../../../redux/reducers/Blog";
import { addImage, getImage } from "../../../redux/reducers/image";
import Header from "../Header";
import {BsPen} from 'react-icons/bs'
import './style.css'


const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState();
   
  useEffect(() => {
    dispatch(loadBlog());
    dispatch(getImage());
  }, [dispatch]);


  const user = useSelector((state) =>
    state.imgReducer.users.find((user) => user._id === id)
  );
console.log(user);
  const blog = useSelector((state) => state.blogReducer.blog);
  const blogus = blog.find((item) => item.user === id)

console.log(blogus);


  if (!user ) {
    return "loading...";
  }


  let now = new Date()
  let hour = now.getHours()
  let message = '';


  if (hour <= 6) {
    message = 'Доброе время суток';
  } else if (hour <= 12) {
    message = 'Доброе утро';
  } else if (hour <= 18) {
    message = 'Добрый день';
  } else {
    message = 'Добрый вечер';
  }



  return (
  
    <div className="background__image">
      <Header />
      <div className="prosto__probel"></div>
      <div className="border__radius" >
        <div className="main_div">
          <div className="photo_back">
            <label htmlFor="upload_photo">
              <input id="upload_photo" className="file" onChange={(e) => setFile(e.target.files[0])} type="file" />
              <div>

              {user.img ? <img className="img"   src={`http://localhost:8000/${user.img}`} /> :  <img className="img"   src={`https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png`} />} 
              </div>

            </label>
            <div className="button__edit__profile">

              <button className="button" > <NavLink className='navLink' to={`/edit/profile/${id}`}>Редактировать профиль </NavLink>     </button>

            </div>

            <div >
              <h1 className="nick__name">
                {message} {user.nickname}
              </h1>
              <p className="id_p">
                {user._id}

              </p>
              <p>

              </p>
              <p className="joined__to">
                {`Вы зарегестрированы с ${user.updatedAt.substring(0, 10)}`}
              </p>
            </div>
          </div>

        </div>
           
          </div>


     

{blogus ? (<> <div className="posts">

<p className="bsPen">< BsPen />  Недавняя активность</p><div className="info__post">Написал статью</div><p className="text__href"  >{now.getDate()} {now.toDateString().substring(3,7)} <Link className="text__href1" to={`/post/${blogus._id}`}>{blogus.title}</Link></p> </div> </>): null} 
      


     
    </div>

  );
};

export default Profile;