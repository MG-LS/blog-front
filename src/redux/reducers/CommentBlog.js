const initialState = {
  comments: [],
  error: null,
  load: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "comments/fetch/fulfilled":
      return {
        ...state,
        comments: action.payload,
        load: false,
      };
    case "comments/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comments/fetch/pending":
      return {
        ...state,
        load: true,
      };
    case "comments/fetch/add/fulfilled":
      return {
        ...state,
        comments: [...state.comments, action.payload],
        load: false,
      };
    case "comments/fetch/add/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "comments/fetch/add/pending":
      return {
        ...state,
        load: true,
      };
    case "comments/fetch/delete/fulfilled": {
      return {
        ...state,
        comments: state.comments.filter((item) => item._id !== action.payload),
        load: false,
      };
    }
    case "comments/fetch/delete/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "comments/fetch/delete/pending": {
      return {
        ...state,
        load: true,
      };
    }
    case "comments/fetch/change/fulfilled": {
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item._id === action.payload) {
            item.text = action.payload.vText;

            return item;
          }
          return item;
        }),
        load: false,
      };
    }
    case "comments/fetch/change/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "comments/fetch/change/pending": {
      return {
        ...state,
        load: true,
      };
    }
    default:
      return state;
  }
};

export const loadBlogComments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comments/fetch/pending" });
      const res = await fetch("http://localhost:8000/comment");
      const data = await res.json();
      dispatch({ type: "comments/fetch/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "comments/fetch/rejected", error: e.toString() });
    }
  };
};

export const postBlogComt = (id, comt, idUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comments/fetch/add/pending" });
      const post = await fetch("http://localhost:8000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: comt, user: idUser, blog: id }),
      });
      const data = await post.json();
      dispatch({ type: "comments/fetch/add/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "comments/fetch/add/rejected", error: e.toString() });
    }
  };
};

export const patchBlogComments = (id, vText) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comments/fetch/change/pending" });
      const patch_fetch = await fetch(`http://localhost:8000/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: vText }),
      });
      const data = await patch_fetch.json();
      dispatch({
        type: "comments/fetch/change/fulfilled",
        payload: { vText, id },
      });
    } catch (e) {
      dispatch({ type: "comments/fetch/change/rejected", error: e.toString() });
    }
  };
};

export const deleteBlogComments = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comments/fetch/delete/pending" });
      const delete_fetch = await fetch(`http://localhost:8000/comment/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "comments/fetch/delete/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "comments/fetch/delete/rejected", error: e.toString() });
    }
  };
};
