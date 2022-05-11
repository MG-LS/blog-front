import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { addImage, getImage } from "../../../redux/reducers/image";
import Header from "../Header";
import EditProfile from "./EditProfile";
import './style.css'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState();
  const editProfileState = useState(false)
  const user = useSelector((state) =>
    state.imgReducer.users.find((user) => user._id === id)
  );
  const postUser = useSelector((state) => state.blogReducer)
  console.log(postUser);


  console.log(user);
  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  const handleImage = () => {
    dispatch(addImage(id, file));
  };

  if (!user) {
    return "loading...";
  }


    let  now = new Date()
     let hour = now.getHours()
     let  message = '';

    
      if (hour <= 6) {
        message = 'Доброе время суток';
      } else if (hour <= 12) {
        message = 'Доброе утро';
      } else if (hour <= 18) {
        message = 'Добрый день';
      } else {
        message = 'Добрый вечер';
      }


     console.log(message);

  return (

<div style={{backgroundColor: '#fafbff'}}>
<Header />
    <div className="border__radius" >

    <div className="main_div">
      <div className="photo_back">

      <label htmlFor="upload_photo">
      <input id="upload_photo" className="file" onChange={(e) => setFile(e.target.files[0])} type="file" />
      <div>
        <img className="img" src={`http://localhost:8000/${user.img}`} />
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
      {`Вы зарегестрированы с ${user.updatedAt.substring(0,10)}`}
      </p>
      </div>
      </div>

    </div>
    </div>
    <div className="posts">
    <h1>Посты</h1>
    </div>
    </div>

  );
};

export default Profile;
