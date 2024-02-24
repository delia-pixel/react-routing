import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("../products");
  }

  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="../products">Products page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}

export default Home;
