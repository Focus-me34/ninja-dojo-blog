import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry,</h2>
      <p>We couldn't find this page.. 😭</p>
      <Link to="/">Go back to Home page</Link>
    </div>
   );
}

export default NotFound;
