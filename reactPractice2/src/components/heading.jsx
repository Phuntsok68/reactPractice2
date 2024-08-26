// import React from "react";
// function Heading() {
//   return <h1>Hello React Components</h1>;
// }

// export default Heading;
import React from "react";

function Heading() {
  const currentDate = new Date();
  const time = currentDate.getHours();
  console.log(time);
  console.log(currentDate);
  let greeting;
  let customStyle = {
    color: "",
  };

  if (time < 12) {
    greeting = "good morning";
    customStyle.color = "red";
  } else if (time < 18) {
    greeting = "good afternoon";
    customStyle.color = "green";
  } else {
    greeting = "good night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
