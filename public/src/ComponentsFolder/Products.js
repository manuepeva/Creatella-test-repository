// import React, { setState } from "react";
const e = React.createElement;
let setState = ReactDOM.setState;
let state = ReactDOM.state;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      data: [],
    };
  }

  render() {
    let letData = [];
    function getData() {
      const data = fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((res) => setState({ data: res }));
    }
    getData();
    console.log(letData);
    return <div>...</div>;
  }
}

const container = document.querySelector(".main");
ReactDOM.render(e(Products), container);
