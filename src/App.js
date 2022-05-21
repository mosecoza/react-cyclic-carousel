import { useEffect, useState } from 'react';
import './App.css';

const images = [
  {
    title: "Daisy",
    image: require("../src/assets/images/daisy.webp"),
  },
  {
    title: "Road",
    image: require("../src/assets/images/road.webp"),
  },
  {
    title: "Desert",
    image: require("../src/assets/images/desert.webp"),
  },
]

function App() {
 
  const [slidePosition, setSlidePosition] = useState(1);
  const [tempSlide, setTempSlide] = useState();
  useEffect(() => {

    SlideShow(slidePosition);
  }, [])

  // forward/Back controls
  function plusSlides(n) {
    if (n > 0) {
      if (slidePosition < images.length) {

        SlideShow(setSlidePosition(slidePosition + n));
      } else {
        SlideShow(setSlidePosition(1));

      }
    } else if (n < 0) {
      if (slidePosition == 1) {

        SlideShow(setSlidePosition(images.length));
      } else {
        SlideShow(setSlidePosition(slidePosition + n));

      }
    }

  }

  //  images controls
  function currentSlide(n) {
    SlideShow(setSlidePosition(n));
  }

  function SlideShow(n) {
    let i;
    const slides = document.getElementsByClassName("containers");
    const circles = document.getElementsByClassName("dots");
 
    if (n > slides.length) { setSlidePosition(1) }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
    }
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      if (index === (slidePosition - 1)) {
        element.classList.remove("none-containers")
        element.classList.add("block-containers")
      } else {

        element.classList.remove("block-containers")
        element.classList.add("none-containers")
      }
      // block
    }

    circles[slidePosition - 1].classList.add("enable");
  }

  return (
    <div>
      <div className="slideshow-container fade">
        {/* render slides images with numbers and  title */}

        {images.map(({ image, title }, i) => {
          return (<div key={title + "-" + i} className="containers">
            <img src={image} style={{ width: '100%' }} />
            <div className="Info">{title}</div>
          </div>)
        })}


        {/* Back and forward buttons */}
        <a className="Back" onClick={() => plusSlides(-1)}>❮</a>
        <a className="forward" onClick={() => plusSlides(1)}>+</a>
      </div>
      <br />
      {/* The circles/dots */}
      <div style={{ textAlign: 'center' }}>
        <span className="dots" onClick={() => currentSlide(1)} />
        <span className="dots" onClick={() => currentSlide(2)} />
        <span className="dots" onClick={() => currentSlide(3)} />
      </div>
    </div>

  );
}

export default App;
