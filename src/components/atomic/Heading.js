import React from "react";

function Heading(props) {
  const { title } = props;
  return <h2 className={"font-bold text-xl"}>{title && title}</h2>;
}

export default Heading;
