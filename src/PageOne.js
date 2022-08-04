import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageOne() {
  const history = useNavigate();

  function gotoPageTwo() {}

  function gotoPageThree() {}

  return (
    <React.Fragment>
      <div>
        <button>Page Two</button>
        <button>Page Three</button>
      </div>
    </React.Fragment>
  );
}
