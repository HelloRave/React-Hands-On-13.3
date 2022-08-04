import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageOne() {
  const history = useNavigate();

  function gotoPageTwo() {
    history('/two')
  }

  function gotoPageThree() {
    history('three')
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={gotoPageTwo}>Page Two</button>
        <button onClick={gotoPageThree}>Page Three</button>
      </div>
    </React.Fragment>
  );
}
