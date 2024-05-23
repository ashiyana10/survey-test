import "../App.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="text-center box">
        <img src="Images/logo.svg" alt="Logo" />
        <p className="font-38px fw-bold font-color-yellow mx-5 mt-0 px-5">
          Credit Card Customer Satisfaction Survey
        </p>
        <p className="text-white font-20px">
          We value your feedback! At Gold Credit Card, we are dedicated to
          providing you with the best possible credit card experience. Your
          responses to this survey will help us understand what we're doing well
          and where we can improve. The survey should take about 5 minutes to
          complete. Thank you for your time and valuable input!
        </p>
        <button className="btn submit-button text-white">
          <Link to="/emoji-survey" className="text-white text-decoration-none">
            Click to Start
          </Link>
        </button>
      </div>
    </div>
  );
}
