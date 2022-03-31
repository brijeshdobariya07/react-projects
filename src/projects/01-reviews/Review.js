import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const peopleLength = people.length - 1;

  const nextPerson = () => {
    if (index === peopleLength) {
      setIndex(0);
    } else setIndex(index + 1);
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex(peopleLength);
    } else setIndex(index - 1);
  };

  const randomPerson = () => {
    let randomNum = Math.trunc(Math.random() * 4);
    if (randomNum === index && randomNum !== peopleLength && randomNum !== 0) {
      randomNum = randomNum + 1;
    }
    setIndex(randomNum);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
}

export default Review;
