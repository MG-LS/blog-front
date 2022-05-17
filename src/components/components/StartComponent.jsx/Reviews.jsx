import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, deleteReview, loadReviews } from "../../../redux/reducers/Review";
import avatar from "../../img/avatar.jpg";

const Reviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviewsReducer.reviews);
  const load = useSelector((state) => state.reviewsReducer.load);
  const [reviewWindow, setReviewWindow] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [upd, setUpd] = useState(true)


  const addNewReview = () => {
    if (reviewRating && reviewText) {
      dispatch(addReview("627a12da597f1fa23b3b4f8a", reviewText, reviewRating));
      setReviewText("");
      setReviewRating(0);
      setUpd(!upd)
    }
  };

  useEffect(() => {
    dispatch(loadReviews());
  }, [dispatch, upd]);

  const delReview = (id) => {
    dispatch(deleteReview(id))
  }

  if (load) {
    return <div>loading...</div>;
  }

  return (
    <div className="reviews">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <p className="reviews-title">ОТЗЫВЫ ОТ НАШИХ ПОЛЬЗОВАТЕЛЕЙ</p>
      <div style={{ textAlign: "center" }} className="add-box">
        <span
          class="add-review material-symbols-outlined"
          onClick={() => setReviewWindow(!reviewWindow)}
        >
          add_box
        </span>
      </div>
      {reviewWindow ? (
        <div className="added-window">
          <div className="review-adding">
            <textarea
              name=""
              id=""
              cols="40"
              rows="3"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <div class="rating-area">
              <p>Оценка:</p>
              <input
                type="radio"
                id="star-5"
                name="rating"
                value="5"
                onClick={() => setReviewRating(5)}
              />
              <label for="star-5" title="Оценка «5»"></label>
              <input
                type="radio"
                id="star-4"
                name="rating"
                value="4"
                onClick={() => setReviewRating(4)}
              />
              <label for="star-4" title="Оценка «4»"></label>
              <input
                type="radio"
                id="star-3"
                name="rating"
                value="3"
                onClick={() => setReviewRating(3)}
              />
              <label for="star-3" title="Оценка «3»"></label>
              <input
                type="radio"
                id="star-2"
                name="rating"
                value="2"
                onClick={() => setReviewRating(2)}
              />
              <label for="star-2" title="Оценка «2»"></label>
              <input
                type="radio"
                id="star-1"
                name="rating"
                value="1"
                onClick={() => setReviewRating(1)}
              />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
          </div>
          <div className="add-btn-block">
            <button className="add-review-btn" onClick={() => addNewReview()}>
              Добавить отзыв
            </button>
          </div>
        </div>
      ) : null}
      <div>
        {reviews.map((item) => {
          return (
            <div key={item._id} className="single-review">
              <span class="material-symbols-outlined" onClick={() => delReview(item._id)}>cancel</span>
              <div className="review-info">
                <div>
                  <img src={avatar} alt="" className="review-avatar" />
                  <span className="review-name">{item.user.nickname}</span>
                </div>
                <div class="rating-result">
                  <span className="review-stars">
                    <span className={item.rating === 5 ? "five-stars" : null}>
                      ★
                    </span>
                    <span className={item.rating === 4 ? "four-stars" : null}>
                      ★
                    </span>
                    <span className={item.rating === 3 ? "three-stars" : null}>
                      ★
                    </span>
                    <span className={item.rating === 2 ? "two-stars" : null}>
                      ★
                    </span>
                    <span className={item.rating === 1 ? "one-star" : null}>
                      ★
                    </span>
                  </span>
                </div>
              </div>
              <div className="review-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
