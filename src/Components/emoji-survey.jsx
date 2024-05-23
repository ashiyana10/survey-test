import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function EmojiSurvey() {
  const { data, updateData } = useContext(DataContext);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const fiveArray = new Array(5).fill(null); // You can replace null with any default value
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up the interval to count down every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      setTimeLeft(120);
      clearInterval(intervalId);
    };
  }, [currentQuestion]);

  const nextQuestion = () => {
    console.log(currentQuestion);
    console.log(data.surveyData.length);
    if (currentQuestion === data.surveyData.length - 1) {
      navigate("/result-survey");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      nextQuestion();
    }
  }, [timeLeft, navigate]);

  /**
   * submit data
   * @param {*} e store answer
   * @param {*} index store index
   */
  const handleDataChange = (e, index) => {
    updateData(index, {
      answer: e,
      time: new Date().toISOString().slice(11, 19),
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="box p-5 bg-white rounded-4">
        <p className="font-36px fw-bold">
          {data.surveyData[currentQuestion].title}
        </p>
        <p className="font-20px">{data.surveyData[currentQuestion].question}</p>
        {/* Emoji quiz section */}
        {data.surveyData[currentQuestion].type === "emoji" && (
          <div className="d-flex ">
            <button
              className="bg-white border-0 image-container"
              onClick={() => setValue("Very Bad")}
            >
              <img
                src="Images/veryBad.svg"
                alt="DefaultImage"
                class="default-image"
              />
              <img
                src="Images/Yellow-Emoji/veryBad.svg"
                alt="HoverImage"
                class="hover-image"
              />
            </button>
            <button
              className="bg-white border-0 image-container"
              onClick={() => setValue("Bad")}
            >
              <img
                src="Images/bad.svg"
                alt="DefaultImage"
                class="default-image"
              />
              <img
                src="Images/Yellow-Emoji/bad.svg"
                alt="HoverImage"
                class="hover-image"
              />
            </button>
            <button
              className="bg-white border-0 image-container"
              onClick={() => setValue("Average")}
            >
              <img
                src="Images/average.svg"
                alt="DefaultImage"
                class="default-image"
              />
              <img
                src="Images/Yellow-Emoji/average.svg"
                alt="HoverImage"
                class="hover-image"
              />
            </button>
            <button
              className="bg-white border-0 image-container"
              onClick={() => setValue("Good")}
            >
              <img
                src="Images/good.svg"
                alt="DefaultImage"
                class="default-image"
              />
              <img
                src="Images/Yellow-Emoji/good.svg"
                alt="HoverImage"
                class="hover-image"
              />
            </button>
            <button
              className="bg-white border-0 image-container"
              onClick={() => setValue("Perfect")}
            >
              <img
                src="Images/perfect.svg"
                alt="DefaultImage"
                class="default-image"
              />
              <img
                src="Images/Yellow-Emoji/perfect.svg"
                alt="HoverImage"
                class="hover-image"
              />
            </button>
          </div>
        )}
        {/* Star quiz Section */}
        {data.surveyData[currentQuestion].type === "star" && (
          <div className="d-flex emoji">
            {fiveArray.map((item, index) => (
              <button
                className={`bg-white border-0 image-container ${
                  value >= index && value != null ? "hover" : ""
                }`}
                onClick={() => setValue(index)}
              >
                <img
                  src="Images/fillStar.svg"
                  class="hover-image"
                  alt="Star"
                  key={index}
                />

                <img
                  class="default-image"
                  src="Images/star.svg"
                  alt="Star"
                  key={index}
                />
              </button>
            ))}
          </div>
        )}
        <hr className="mt-5" />
        {/* Submit button */}
        <div className="d-flex justify-content-between">
          <button
            className="btn submit-button text-white"
            onClick={() => {
              handleDataChange(value, currentQuestion);
              nextQuestion();
            }}
          >
            Next Question
          </button>
          {/* Time Remaining */}
          <div className="d-flex">
            <img src="/Images/Timer.svg" alt="Timer" />
            <div className="d-flex align-items-center">
              <div>
                <span className="font-14px font-gray">Time Remaining</span>
                <p className="text-center m-0">
                  {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
