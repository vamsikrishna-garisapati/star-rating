import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating" aria-label="Star Rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className="star"
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            {starValue <= (hover || rating) ? (
              <AiFillStar className="filled" />
            ) : (
              <AiOutlineStar className="outlined" />
            )}
          </span>
        );
      })}
      <p className="rating-text">{rating} / {totalStars} Rating</p>
    </div>
  );
};

export default StarRating;
