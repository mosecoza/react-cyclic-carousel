import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { ReactComponent as Left } from "../../assets/svg/arrow-left.svg";
import { ReactComponent as Right } from "../../assets/svg/arrow-right.svg";
import { ReactComponent as Chev } from "../../assets/svg/chevron-right.svg";

/**
 * @component Carousel - cyclic carousel
 *
 * @typedef {[{title:"", image: object}]} slide
 *
 * @param {slide} slides
 */

function Carousel({ slides }) {
    const [tempSlide, setTempSlide] = useState(slides);
    const [dark, setDark] = useState(false);
    useEffect(() => {
      const timer = setInterval(() => {
        next(1);
      }, 1000 * 15);
  
      return () => clearInterval(timer);
    }, []);

  // forward/back controls
  function next(n) {
    let tmp = tempSlide;
    let newValue;
    //
    if (n > 0) {
      newValue = tmp.shift();
      tmp.push(newValue);
    } else if (n < 0) {
      newValue = tmp.pop();
      tmp.unshift(newValue);
    }

    setTempSlide((prev) => Object.assign([], tmp));
  }

  return (
    <div className="slideshow-container fade">
      <div className="container">
          <div className="comment"><span>What are you<br/><b>here to do?</b></span></div>
        {tempSlide.map(({ title, image }, i) => {
          let slideClass = "";
          // assign class to slide according to position
          switch (i) {
            case 0:
              slideClass = "one";
              break;
            case 1:
              slideClass = "two";
              break;
            case 2:
              slideClass = "main";
              break;
            case 3:
              slideClass = "three";
              break;
            case 4:
              slideClass = "four";
              break;

            default:
              return null;
          }
          return (
            <div key={title + "-" + i} className={`${slideClass} `}>
              <div className={`inner-container ${i==2&&dark?" dark ":""}`}>
                <div className="img-container">
                  <img src={image} alt={title} />
                </div>
                {/* text content of the slide */}
                <div className="card-text">
                  <h4>{title}</h4>
                  {/* only show 'start here' on the main slide*/}
                  {i == 2 ? (
                    <span onClick={()=>setDark(!dark)} className="start-here">
                      {" start here "} <Chev width="14px" style={{fontSize:"12px"}} />
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* slide controls */}
      <a className="Back" onClick={() => next(-1)}>
        <Left />
      </a>
      <a className="forward" onClick={() => next(1)}>
        <Right />
      </a>
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Carousel;
