import React from "react";
import { useNavigate } from "react-router-dom";
export default function PageThree() {
  const history = useNavigate();

  function goto(url) {
    history(url);
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={() => {goto('/')}}>Page One</button>
        <button onClick={() => {goto('/two')}}>Page Two</button>
      </div>
    </React.Fragment>
  );
}
