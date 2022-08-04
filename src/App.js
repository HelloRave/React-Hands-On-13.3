import React from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to='/'>Page One</Link>
          </li>
          <li>
            <Link to='/two'>Page Two</Link>
          </li>
          <li>
            <Link to='/three'>Page Three</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<PageOne />} />
          <Route path='/two' element={<PageTwo />} />
          <Route path='/three' element={<PageThree />} />
        </Routes>
      </Router>
    </div>
  );
}
