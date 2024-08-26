import React from "react";
import ReactDom from "react-dom";
// import App from "./components/app";
// JSX Attributes and Styling react elements

// const image = "https://picsum.photos/200";
// ReactDom.render(
//   <div>
//     <h1 className="heading">Hello World</h1>
//     <ul className="my-para">
//       <li>Fish</li>
//       <li>Steak</li>
//       <li>Bacon</li>
//     </ul>
//     <p>Adios</p>
//     <img src={image} alt="image of random " />
//   </div>,
//   document.getElementById("root")
// );

// Inline styling for react elements

// ReactDom.render(
//   <h1 style={{ color: "red" }}>Hello World</h1>,
//   document.getElementById("root")
// );

// const customStyle = {
//   color: "red",
//   fontSize: "30px",
//   border: "1px solid black",
// };

// customStyle.color = "blue";
// ReactDom.render(
//   <h1 style={customStyle}>Hello World</h1>,
//   document.getElementById("root")
// );

// React styling practice

// const currentDate = new Date();
// const time = currentDate.getHours();
// console.log(time);
// console.log(currentDate);
// let greeting;
// let customStyle = {
//   color: "",
// };

// if (time < 12) {
//   greeting = "good morning";
//   customStyle.color = "red";
// } else if (time < 18) {
//   greeting = "good afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "good night";
//   customStyle.color = "blue";
// }
// reactDom.render(
//   <h1 className="heading" style={customStyle}>
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );

// React Components

// function Heading() {
//   return <h1>Hello React Components</h1>;
// }
// ReactDom.render(
//   <div>
//     <Heading />
//     <List />
//   </div>,
//   <App />,
//   document.getElementById("root")
// );
// ReactDom.render(<App />, document.getElementById("root"));

// Import, export, modules in ES6

// import pi,{doublePi,triplePi} from "./math.js";
// import * as pi from "./math";
// console.log(pi);

// ReactDom.render(
//   <div>
//     <ul>
//       <li>{pi.default}</li>
//       <li>{pi.doublePi()}</li>
//       <li>{pi.triplePi()}</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

import { add, sub, mul, div } from "./calculator";
ReactDom.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{mul(2, 3)}</li>
      <li>{sub(4, 3)}</li>
      <li>{div(6, 3)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
