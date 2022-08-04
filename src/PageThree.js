import React from "react";
import { useHistory } from "react-router-dom";
export default function PageThree() {
  const history = useHistory();

  function goto(url) {
    history.push(url);
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={() => {}}>Page One</button>
        <button onClick={() => {}}>Page Two</button>
      </div>
    </React.Fragment>
  );
}
