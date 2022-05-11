import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addImage, getImage } from "../../../redux/reducers/image";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState();
  const user = useSelector((state) => state.imgReducer.users.find((user) => user._id === id));

  useEffect(() => {
    dispatch(getImage(id));
  }, [dispatch]);

  const handleImage = () => {
    dispatch(addImage(id, file));
  };

  if(!user) {
    return 'loading...'
  }

  return (
    <div>
      <input onChange={(e) => setFile(e.target.files[0])} type="file" />
      <div>
        <img src={`http://localhost:8000/${user.img}`} />
      </div>
      <button onClick={handleImage}>Изменить фото</button>
    </div>
  );
};

export default Profile;
