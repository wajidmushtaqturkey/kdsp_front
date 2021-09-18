import React from "react";

function Heading(props) {
  const { title, color } = props;
  return (
    <h2
      className={
        "font-bold text-xl " +
        (color === "light" ? "text-blueGray-800" : "text-white")
      }
    >
      {title && title}
    </h2>
  );
}

export default Heading;
