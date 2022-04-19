import { Carousel } from "antd";
import "antd/dist/antd.css";
import carouselimage1 from "../assets/carouselimage1.png";
import carouselimage2 from "../assets/carouselimage2.png";
import carouselimage3 from "../assets/carouselimage3.png";

function onChange(a, b, c) {
  console.log(a, b, c);
}

function ImageSlider() {
  return (
    <div
      style={{
        display: "block",
        width: "100vw",
        padding: 30,
        marginTop: 100,
        marginLeft: 0,
        marginRight: 0,
        height: 500,
      }}
    >
      <>
        <Carousel autoplay afterChange={onChange}>
          <div>
            <img
              src={carouselimage1}
              style={{ width: "100vw", height: 500, objectFit: "fill" }}
            />
          </div>
          <div>
            <img
              src={carouselimage2}
              style={{ width: "100vw", height: 500, objectFit: "fill" }}
            />
          </div>
          <div>
            <img
              src={carouselimage3}
              style={{ width: "100vw", height: 500, objectFit: "fill" }}
            />
          </div>
        </Carousel>
      </>
    </div>
  );
}

export default ImageSlider;
