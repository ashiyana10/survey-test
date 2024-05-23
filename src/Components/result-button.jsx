import { Link } from "react-router-dom";
export function ResultButton() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="text-center box p-5 bg-white rounded-4">
        <div className="m-5 p-4 mt-0">
          <img src="Images/right.svg" alt="Right" />
          <p className="fw-bold font-36px">Thank You</p>
          <p className="font-20px ">
            Thank you for taking the time to complete this survey. Your feedback
            is invaluable to us and helps us serve you better.
          </p>
          {/* View Result */}
          <button className="btn submit-button text-white">
            <Link to="/show-result" className="text-white text-decoration-none">
              View Result
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
