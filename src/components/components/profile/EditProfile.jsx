import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addImage, getImage } from "../../../redux/reducers/image";
import Header from "../Header";
import one from "./icons/1.png"
import two from "./icons/2.png"
import thr from "./icons/3.png"
import fre from "./icons/4.png"
import fou from "./icons/5.png"
import Profile from "./Profile";
import './style.css'


const EditProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [file, setFile] = useState();


useEffect(() => {
    dispatch(getImage());
;
  }, [dispatch, id]);

    const user = useSelector((state) =>
      state.imgReducer.users.find((user) => user._id === id)
    );

    const handleImage = () => {
      dispatch(addImage(id, file));

    };
 
    if(!user) {
        return 'loading...'
    }

    return (
        <>
        <div>
        <Header />
        <div className="div__in__edit">
            <div className="h1__user">
            <div className="heading">
            <h1 className="h1">
            User Setting
            </h1>
            </div>
        <div className="list__edit">
                    <ul className="ul__edit">
                        <li className="li__edit"><img className="icon" src={one} /><NavLink className='navLink' to={`/profile/${id}`}> Profile</NavLink>  </li>
                        <li><img className="icon"  src={two} /> EMAIL NOTFICATION</li>
                        <li><img className="icon"  src={thr} /> MANAGE BLOG</li>
                        <li><img  className="icon"  src={fre} /> DEVELOPER</li>
                        <li><img className="icon"  src={fou} /> ACCOUNT</li>
                    </ul>
                </div>
                </div> 
                
    
            <div className="main__div__setting">
                <div className="setting__photo">
                    <div className="basic__info">

                    <h1 className='h2'>Basic Info</h1>
                    <div className="one__input">
                    <p className="p__full__name">nick name</p>
                    <input id="full__name" type='text' placeholder={user.nickname} />
                    </div>
                    <div className="two__input">
                    <p className="p__full__name">Tags</p>
                    <input id="full__name" type='text' placeholder='Software Developer @..' />
                    </div>
                <label htmlFor="upload_photo__edit">
      <input id="upload_photo__edit"    onChange={(e) => setFile(e.target.files[0])} type="file" />
      <div>
        <img className="img__edit" src={`http://localhost:8000/${user.img}`} />
      </div>
      
      </label>
                <div className="setting__photo2">

                <p className="p__full__name">Location</p>
                    <input id="full__name" type='text' placeholder='Russia, Grozny' />
                <h1 className="h3">About You</h1>
                <label htmlFor="textArea">Available for</label>
                <textarea className="textArea" id="textArea" cols="30" rows="10" placeholder="I am available for mentoring..."></textarea>
                </div>
                </div>
                <div className="social">
                    <h1 className="h2">Social</h1>
    <p className="p__full__name">GitHub Profile</p>
                    <input id="full__name" type='text' placeholder="https://github.com/" />

    <p className="p__full__name">StackOverflow Profile</p>
                    <input id="full__name" type='text' placeholder="https://StackOverflow.com/" />

    <p className="p__full__name">Email</p>
    <small className="about__info">Изменение адреса электронной почты может привести к нарушению входа в систему Auth, если ваши учетные записи в социальных сетях не используют один и тот же адрес электронной почты. Пожалуйста, используйте вход по волшебной ссылке, если вы столкнулись с такой проблемой.</small>
                    <input id="full__name" type='text' value={user.email} />
                <button className="button__edit" onClick={handleImage}>Обновить</button>

    </div>

                </div>
   
            </div>

        
                            </div>

        </div>
        </>

    );
};

export default EditProfile;