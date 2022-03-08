import React from "react";
import { CardGroup, Card } from "react-bootstrap";

const whyshopwithus = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px 20px 0px",
          fontWeight: "bold",
        }}
      >
        {" "}
        Why Shop With Us.
      </h1>
      <CardGroup>
        <Card
          style={{
            margin: "10px",
            padding: "30px",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "#002c3e",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../../images/ss.png")}
            height="150px"
          />

          <Card.Body>
            <Card.Title>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Fast Delivery
              </h2>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              variations of passages of Lorem Ipsum available
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            margin: "10px",
            padding: "30px",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "#002c3e",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../../images/free.png")}
            height="150px"
          />
          <Card.Body>
            <Card.Title>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Free Shiping
              </h2>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              variations of passages of Lorem Ipsum available{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            margin: "10px",
            padding: "30px",
            border: "2px solid black",
            borderRadius: "8px",
            backgroundColor: "#002c3e",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../../images/quality.png")}
            height="150px"
          />
          <Card.Body>
            <Card.Title>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Best Quinty
              </h2>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              variations of passages of Lorem Ipsum available
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default whyshopwithus;
