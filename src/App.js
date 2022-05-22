import './App.css';
import Carousel from './components/Carousel/Carousel';

//initialise the slides with title and image array, it can also be passed as props
const images = [
  {
    title: "Mobile internet",
    image: require("../src/assets/images/daisy.webp"),
  },
  {
    title: "Home internet",
    image: require("../src/assets/images/road.webp"),
  },
  {
    title: "Get a device",
    image: require("../src/assets/images/bedroom.webp"),
  },
  {
    title: "Add a phone line",
    image: require("../src/assets/images/desert.webp"),
  },
  {
    title: "Upgrade",
    image: require("../src/assets/images/field.webp"),
  },
];
function App() {
 
// load carousel with the slides you want to display
  return (<Carousel slides={images}/>);
}

export default App;
