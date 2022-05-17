const initialState = {
  reviews: [],
  error: null,
  load: false,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "reviews/fetch/fulfilled":
      return {
        ...state,
        reviews: action.payload,
        load: false,
      };
    case "reviews/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "reviews/fetch/pending":
      return {
        ...state,
        load: true
      }
    case "reviews/fetch/add/fulfilled":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        load: false
      }
    case "reviews/fetch/add/rejected":
      return {
        ...state,
        error: action.error,
        load: false
      }
    case "reviews/fetch/add/pending":
      return {
        ...state,
        load: true
      }
    case "reviews/fetch/delete/fulfilled":
      return {
        ...state,
        reviews: state.reviews.filter((item) => item._id !== action.payload),
        load: false
      }
    case "reviews/fetch/delete/rejected":
      return {
        ...state,
        error: action.error,
        load: false
      }
    case "reviews/fetch/delete/pending":
      return {
        ...state,
        load: true
      }
    default:
      return state;
  }
};

export const loadReviews = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "reviews/fetch/pending" });
      const res = await fetch("http://localhost:8000/reviews");
      const reviews = await res.json();
      dispatch({ type: "reviews/fetch/fulfilled", payload: reviews });
    } catch (error) {
      dispatch({ type: "reviews/fetch/rejected", error: error.toString() });
    }
  };
};

export const addReview = (reviewText, reviewRating) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "reviews/fetch/add/pending" })
      const res = await fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: "627a12da597f1fa23b3b4f8a", text: reviewText, rating: reviewRating }),
      })
      const review = await res.json()
      dispatch({ type: "reviews/fetch/add/fulfilled", payload: review })
    } catch (error) {
      dispatch({ type: "reviews/fetch/add/rejected", error: error.toString() })
    }
  }
}

export const deleteReview = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "reviews/fetch/delete/pending" })
      const res = await fetch(`http://localhost:8000/reviews/${id}`, {
        method: "DELETE",
      })
      dispatch({ type: "reviews/fetch/delete/fulfilled", payload: id })
    } catch (error) {
      dispatch({ type: "reviews/fetch/delete/rejected", error: error.toString() })
    }
  }
}
