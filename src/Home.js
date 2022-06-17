const Home = () => {

  const handleClick = (e) => {
    console.log("It's me, Mariooooo");
    console.log(e.target);
  }

  const handleClickAgain = (name, e) => {
    console.log("it's me, " + name);
    console.log(e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button className="btn-1" onClick={handleClick}>Click me</button>
      <button className="btn-2" onClick={(e) => handleClickAgain("Amin", e)}>Click me</button>
    </div>
  );
}

export default Home;
