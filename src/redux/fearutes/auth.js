const initialState = {
  signinUp: false,
  signinIn: false,
  error: null,
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("id"),
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "auth/signup/pending":
      return {
        ...state,
        signinUp: true,
        error: null,
      };
    case "auth/signup/fulfilled":
      return {
        ...state,
        signinUp: false,
      };
    case "auth/signup/rejected":
      return {
        ...state,
        signinUp: false,
        error: action.error,
      };

    case "auth/signin/pending":
      return {
        ...state,
        signinIn: true,
        error: null,
      };
    case "auth/signin/fulfilled":
      return {
        ...state,
        signinIn: false,
        token: action.payload.accessToken,
      };
    case "auth/signin/rejected":
      return {
        ...state,
        signinIn: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const createUser = (email, password, nickname, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signup/pending" });
    const res = await fetch("http://localhost:8000/reg", {
      method: "POST",
      body: JSON.stringify({ email, password, nickname }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      const response = await res.json();
      dispatch({ type: "auth/signup/fulfilled", payload: response });
      navigate("/login");
    } else {
      const response = await res.json();
      dispatch({ type: "auth/signup/rejected", error: response.message });
    }
  };
};

export const authUser = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signin/pending" });
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      dispatch({ type: "auth/signin/fulfilled", payload: json });
      localStorage.setItem("token", json.accessToken);
      localStorage.setItem("id", json.user.id);
      navigate(`/profile/${json.user.id}`);
    } else {
      const json = await res.json();
      dispatch({ type: "auth/signin/rejected", error: json.message });
    }
  };
};
