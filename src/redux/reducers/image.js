const initialState = {
  users: [],
  loader: false,
  error: null,
};

export const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case "profile/image/pendeing":
      return {
        ...state,
        loader: true,
      };
    case "add/image/fulfilled":
      return {
        ...state,
        loader: false,
        users: [state.users, action.payload],
      };
    case "profile/image/rejected":
      return {
        ...state,
        loader: false,
        error: action.payload,
      };
    case "getImage/image/pending":
      return {
        ...state,
        loader: true,
        error: null,
      };
    case "getImage/image/fulfilled":
      return {
        ...state,
        loader: false,
        users:  action.payload
      };
    case "getImage/image/rejected":
      return {
        ...state,
        loader: false,
        error: action.error,
      };
    case "nickname/stoped/pending":
      return{
        ...state,
        loader: true,
        error: null
      }
    case "nickname/lucky/fulfilled":
      return{
        ...state,
        loader: false,
        users: action.payload,
        error: null
      }
    case "nickname/error/rejected":
      return{
        ...state,
        loader: false,
        error: action.error
      } 
    case "profile/status/pending":
      return{
        ...state,
        loader: true,
        error: null
      }     
    case "profile/status/fullfilled":
      return{
        ...state,
        loader: false,
        users: state.users.map(user => {
          if(user._id === action.payload) {
            user.profileStatus = !user.profileStatus
          }
          return user;
        })
      }
    case "profile/status/rejected":
      return{
        ...state,
        loader: false,
        error: action.error
      }     
    default:
      return state;
  }
};

export const addImage = (id, file) => {
  return async (dispatch) => {
    dispatch({ type: "profile/image/pendeing" });
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(`http://localhost:8000/img/${id}`, {
        method: "PATCH",
        body: formData,
        
      });
      const data = await res.json();

      dispatch({ type: "add/image/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "profile/image/rejected", payload: e.toString() });
    }
  };
};
export const getImage = () => {
  return async (dispatch) => {
    dispatch({ type: "getImage/image/pending" });
    try {
      const res = await fetch(`http://localhost:8000/users`);
      const data = await res.json();
      dispatch({ type: "getImage/image/fulfilled", payload: data });


    } catch (e) {
      dispatch({ type: "getImage/image/rejected", payload: e.toString() });
    }
  };
};

export const createNickName = (nickname,id) => {
  return async (dispatch) => {
    dispatch({ type: "nickname/stoped/pending" });
    const res = await fetch(`http://localhost:8000/editMyProf/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ nickname }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      const response = await res.json();
      dispatch({ type: "nickname/lucky/fulfilled", payload: response });

    } else {
      const response = await res.json();
      dispatch({ type: "nickname/error/rejected", error: response.message });
    }
  };
};

export const handleChecked = (id, profileStatus) => {
  return async(dispatch)=>{
    dispatch({type: "profile/status/pending"});
    const res = await fetch(`http://localhost:8000/editMyProf/${id}`, {
      method: "PATCH",
      body: JSON.stringify({profileStatus: profileStatus})
    });
    if(res.status === 200){
      const users = await res.json();

      dispatch({type: 'profile/status/fullfilled', payload: id} )
    }else{
      const response = await res.json()
      dispatch({type: 'profile/status/rejected', error: response.message} )

    }
  }
}