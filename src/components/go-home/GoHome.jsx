import { Link } from "react-router-dom";
import homeImg from "../../assets/home.svg";
const GoHome = () => {
  return (
    <div className="container mt-8">
      <Link
        to="/"
        className="inline-block text-gray-600 home-btn"
        id="lws-goHome"
      >
        <div className="icon-container">
          <img className="icon-btn" src={homeImg} alt="like" />
          Go Home
        </div>
      </Link>
    </div>
  );
};

export default GoHome;
