import React from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className="sd">
        <img
          className="d-block  w-100  sd"
          src={require("../../images/slider-bg.jpg")}
          height="auto"
          alt="First slide"
        />
        <Carousel.Caption
          style={{ position: "absolute", top: "160px", left: "-400px" }}
        >
          <h1 style={{ color: "#f7444e" }}>Sale 20% Off On Everything</h1>
          <pre
            style={{
              fontFamily: "sans-serif",
              color: "black",
              fontSize: "15px",
            }}
          >{`Explicabo esse amet tempora quibusdam laudantium, laborum 
  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
  earum suscipit fugiat molestias, veniam, vel architecto veritatis
delectus repellat modi impedit sequi.`}</pre>
          <button
            style={{
              display: "inline-block",
              padding: "12px 45px",
              backgroundColor: "#f7444e",
              border: "1px solid #f7444e",
              color: "#ffffff",
              borderRadius: "2px",
              // -webkit-transition: "all 0.3s",
              transition: "all 0.3s",
              marginTop: "10px",
              fontWeight: "700",
            }}
          >
            Shop
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require("../../images/slider-bg.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption
          style={{ position: "absolute", top: "160px", left: "-400px" }}
        >
          <h1 style={{ color: "#f7444e" }}>Sale 20% Off On Everything</h1>
          <pre
            style={{
              fontFamily: "sans-serif",
              color: "black",
              fontSize: "15px",
            }}
          >{`Explicabo esse amet tempora quibusdam laudantium, laborum 
  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
  earum suscipit fugiat molestias, veniam, vel architecto veritatis
delectus repellat modi impedit sequi.`}</pre>
          <button
            style={{
              display: "inline-block",
              padding: "12px 45px",
              backgroundColor: "#f7444e",
              border: "1px solid #f7444e",
              color: "#ffffff",
              borderRadius: "2px",
              // -webkit-transition: "all 0.3s",
              transition: "all 0.3s",
              marginTop: "10px",
              fontWeight: "700",
            }}
          >
            Shop
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slider-bg.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption
          style={{ position: "absolute", top: "160px", left: "-400px" }}
        >
          <h1 style={{ color: "#f7444e" }}>Sale 20% Off On Everything</h1>
          <pre
            style={{
              fontFamily: "sans-serif",
              color: "black",
              fontSize: "15px",
            }}
          >{`Explicabo esse amet tempora quibusdam laudantium, laborum 
  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
  earum suscipit fugiat molestias, veniam, vel architecto veritatis
delectus repellat modi impedit sequi.`}</pre>
          <button
            style={{
              display: "inline-block",
              padding: "12px 45px",
              backgroundColor: "#f7444e",
              border: "1px solid #f7444e",
              color: "#ffffff",
              borderRadius: "2px",
              transition: "all 0.3s",
              marginTop: "10px",
              fontWeight: "700",
            }}
          >
            Shop
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Main;
