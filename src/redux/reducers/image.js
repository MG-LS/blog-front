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

