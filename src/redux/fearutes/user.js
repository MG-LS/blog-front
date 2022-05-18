const userState = {
  users: [],
  loading: true,
  user: {}
};

export const users = (state = userState, action) => {
  switch (action.type) {
    case "users/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/fetch/fulfilled":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "users/fetch/rejected": {
      return {
        ...state,
        loading: false,
      };
    }
    case "getOne/user/rejected": {
      return {
        ...state,
        loading: false,
      };
    }
    case "'getOne/user/pending":
      return {
        ...state,
        loading: true,
      };
    case 'getOne/user/fulfilled': {
      return{
        ...state,
        user: action.payload
      }
    }
    default:
      return state;
  }
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "users/fetch/pending" });
      const response = await fetch("http://localhost:8000/users");
      const json = await response.json();
      dispatch({ type: "users/fetch/fulfilled", payload: json });
    } catch (error) {
      dispatch({ type: "users/fetch/rejected", payload: error.message });
    }
  };
};

export const addSub = (idLocal, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "addSub/user/pending" });
      const response = await fetch(`http://localhost:8000/user/${idLocal}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ subscript: id }),
      });
      dispatch({ type: "addSub/user/fulfilled", payload: { idLocal, id } });
    } catch (error) {
      dispatch({ type: "addSub/user/rejected", payload: error.message });
    }
  };
};
export const fetchOneUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "getOne/user/pending" });
      const response = await fetch(`http://localhost:8000/user/${id}`);
      const json = await response.json();
      dispatch({ type: "getOne/user/fulfilled", payload: json });
    } catch (error) {
      dispatch({ type: "getOne/user/rejected", payload: error.message });
    }
  };
};
