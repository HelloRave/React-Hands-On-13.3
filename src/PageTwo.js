import React from "react";
import { useHistory } from "react-router-dom";

export default function PageTwo() {
  const history = useHistory();
  return (
    <React.Fragment>
      <div>
        <button onClick={() => {}}>Page One</button>
        <button onClick={() => {}}>Page Three</button>
      </div>
    </React.Fragment>
  );
}
