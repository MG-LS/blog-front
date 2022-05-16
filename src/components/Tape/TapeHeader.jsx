import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";


const TapeHeader = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState();
  const editProfileState = useState(false)

  const user = useSelector((state) =>
    state.imgReducer.users.find((user) => user.img)
  );
  const postUser = useSelector((state) => state.blogReducer)
  console.log(postUser);


  return (
    <>
      <div>
        <div>
          <div>
            <img src="" alt="" /> Фото
            <p>Ник</p>
          </div>
          <div>
          <button type="button" class="btn btn-outline-primary">Подписаться</button>
          <div><img src="" alt="" />Фото Аккаунта</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapeHeader;
