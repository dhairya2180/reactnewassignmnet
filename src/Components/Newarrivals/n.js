import React from "react";
import "./n.css";

const N = () => {
  return (
    <div className="row mx-0 px-0 n1">
      <div className="col-6"></div>
      <div className="col-6    align-self-center">
        <h1 className="text-dark">#New arrival</h1>
        <p className="text-dark my-4 fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repellendus inventore tenetur hic laboriosam fugiat unde, iusto
          temporibus amet ab explicabo porro! Possimus, molestias ducimus?
          Reprehenderit esse libero amet alias?
        </p>
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
            marginLeft: "0px",
            fontWeight: "700",
          }}
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default N;
