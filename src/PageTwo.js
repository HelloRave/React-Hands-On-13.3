import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageTwo() {
  const history = useNavigate();
  return (
    <React.Fragment>
      <div>
        <button onClick={() => {history('/')}}>Page One</button>
        <button onClick={() => {history('/three')}}>Page Three</button>
      </div>
    </React.Fragment>
  );
}
