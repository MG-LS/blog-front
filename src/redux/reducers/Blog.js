const initialState = {
  blog: [],
  error: null,
  load: true,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "blog/fetch/fulfilled": {
      return {
        ...state,
        blog: action.payload,
        load: false,
      };
    }
    case "blog/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "blog/fetch/pending":
      return {
        ...state,
        load: true,
      };
    case "add/blog/fetch/fulfilled":
      return {
        ...state,
        blog: [...state.blog, action.payload],
        load: false,
      };
    case "add/blog/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "add/blog/fetch/pending":
      return {
        ...state,
        load: true,
      };
    case "blog/fetch/delete/fulfilled": {
      return {
        ...state,
        blog: state.blog.filter((item) => item._id !== action.payload),
        load: false,
      };
    }
    case "blog/fetch/delete/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "blog/fetch/delete/pending": {
      return {
        ...state,
        load: true,
      };
    }
    default:
      return state;
  }
};

export const loadBlog = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "blog/fetch/pending" });
      const res = await fetch(`http://localhost:8000/blog`);
      const json = await res.json();

      dispatch({ type: "blog/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "blog/fetch/rejected", error: e.toString() });
    }
  };
};

export const addBlog = (file, user, title, text) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "add/blog/fetch/pending" });
      const formData = new FormData();
      formData.append("img", file);
      formData.append("user", user);
      formData.append("title", title);
      formData.append("text", text);
      const response = await fetch("http://localhost:8000/blog", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();

      dispatch({ type: "add/blog/fetch/fulfilled", payload: json });
    } catch (error) {
      dispatch({
        type: "add/blog/fetch/rejected",
        payload: error.message,
      });
    }
  };
};

export const deleteBlog = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "blog/fetch/delete/pending" });
      const deleteBlog = await fetch(`http://localhost:8000/blog/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "blog/fetch/delete/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "blog/fetch/delete/rejected", error: e.toString() });
    }
  };
};

// export const patchBlog = (vLikes, boolean, users) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: "blog/change/pending" });
//       const patch_fetch = await fetch(`http://localhost:8000/blog/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ boolean: !boolean, user: users }),
//       });
//       const data = await patch_fetch.json();
//       dispatch({ type: "blog/change/fulfilled", payload: { users, id } });
//     } catch (e) {
//       dispatch({ type: "blog/change/rejected", error: e.toString() });
//     }
//   };
// };
