import { useState } from "react"

const Home = () => {
  const [name, updateName] = useState("Mario")

  const handleClick = (e) => {
    updateName("Luigi")
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
