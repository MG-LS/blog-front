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
    case "blog/change/fulfilled": {
      return {
        ...state,
        blog: state.blog.map((item) => {
          if (item._id === action.payload.idBlog) {
            item.likes = [...item.likes, action.payload.idUser];
            return item;
          }
          return item;
        }),
        load: false,
      };
    }
    case "blog/change/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "blog/change/pending": {
      return {
        ...state,
        load: true,
      };
    }
    case "blog/change/delete/fulfilled": {
      return {
        ...state,
        blog: state.blog.map((item) => {
          if (item._id === action.payload.idBlog) {
            item.likes = item.likes.filter((i) => i !== action.payload.idUser);
            return item;
          }
          return item;
        }),
        load: false,
      };
    }
    case "blog/change/delete/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "blog/change/delete/pending": {
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

export const addBlog = (file, user, title, text, navigate) => {
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
      navigate("/post")
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

// export const addLike = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: "comments/fetch/add/pending" });
//       const post = await fetch(`http://localhost:8000/like/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: comt, blog: id, user: idUser }),
//       });
//       const data = await post.json();
//       console.log(data);
//       dispatch({ type: "comments/fetch/add/fulfilled", payload: data });
//     } catch (e) {
//       dispatch({ type: "comments/fetch/add/rejected", error: e.toString() });
//     }
//   };
// };

export const Like = (idBlog, idUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "blog/change/pending" });
      const patch_fetch = await fetch(`http://localhost:8000/like/${idBlog}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: idUser }),
      });
      const data = await patch_fetch.json();
      dispatch({ type: "blog/change/fulfilled", payload: { idBlog, idUser } });
    } catch (e) {
      dispatch({ type: "blog/change/rejected", error: e.toString() });
    }
  };
};

export const deleteLike = (idBlog, idUser) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "blog/change/delete/pending" });
      const patch_fetch = await fetch(`http://localhost:8000/like/delete/${idBlog}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: idUser }),
      });
      const data = await patch_fetch.json();
      dispatch({ type: "blog/change/delete/fulfilled", payload: { idBlog, idUser } });
    } catch (e) {
      dispatch({ type: "blog/change/delete/rejected", error: e.toString() });
    }
  };
};

