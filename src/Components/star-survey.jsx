import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Star } from "./star";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Link } from "react-router-dom";

export function StarSurvey() {
  const { data, updateData } = useContext(DataContext);
  const [star, setStar] = useState(Array(5).fill(null));
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const navigate = useNavigate();

  const handleDataChange = (e, index) => {
    updateData("starSurvey", index, { answer: e });
  };

  useEffect(() => {
    // Set up the interval to count down every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/");
    }
  }, [timeLeft, navigate]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <table>
          <tbody>
            {data.starSurvey.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    {star.map((_, indexStar) => (
                      
                        <Star
                          key={indexStar}
                          filled={indexStar < data.starSurvey[index].answer}
                          onClick={() => handleDataChange(indexStar + 1, index)}
                        />
                      
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        < button><Link to="/result-survey">Next</Link></button>
      </div>
      <h1>
        Time left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </h1>
    </div>
  );
}
