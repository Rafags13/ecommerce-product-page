import ImageDisplay from "../ImageDisplay";
import ImageArrows from "./ImageArrows";
import ImageTouchable from "./ImageTouchable";
import ImagesContainer from "./ImagesContainer";
import Root from "./Root";

const Image = {
  Root: Root,
  Display: ImageDisplay,
  TouchableImage: ImageTouchable,
  SelectContainer: ImagesContainer,
  Arrows: ImageArrows
};

export default Image;