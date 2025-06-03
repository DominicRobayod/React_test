import { useState } from "react";

function Like() {
  const [likes, setLikes] = useState(0);

  const handleIncrement = () => {
    setLikes(likes + 1);
  };

  const handleDecrement = () => {
    setLikes(likes - 1);
  };

  return (
    <div>
        <h1>Hola </h1>
      <h3>Likes: {likes}</h3>
      <button id="increment" data-testid="like-button" onClick={handleIncrement}>
        Like
      </button>
      <br></br>
      <br></br>
      <button id="decrement" data-testid="dislike-button" onClick={handleDecrement}>
        Dislike
      </button>
    </div>
  );
}

export default Like;
