import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function EmojiSurvey() {
  const { data, updateData } = useContext(DataContext);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const navigate = useNavigate();

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

  const handleDataChange = (e, index) => {
    updateData("emojiSurvey", index, { answer: e });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <table>
          <tbody>
            {data.emojiSurvey.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>
                  <input
                    type="radio"
                    name={`emoji${index}`}
                    value="&#128512;"
                    onChange={() => handleDataChange("&#128531;", index)}
                  />
                  <label
                    style={{ fontSize: "25px" }}
                    className={item.answer !== "&#128531;" ? "skin-tone" : ""}
                  >
                    &#128531;
                  </label>

                  <input
                    type="radio"
                    name={`emoji${index}`}
                    value="&#x1F615;"
                    onChange={() => handleDataChange("&#x1F615;", index)}
                  />
                  <label
                    style={{ fontSize: "25px" }}
                    className={item.answer !== "&#x1F615;" ? "skin-tone" : ""}
                  >
                    &#x1F615;
                  </label>

                  <input
                    type="radio"
                    name={`emoji${index}`}
                    value="&#x1F60A;"
                    onChange={() => handleDataChange("&#x1F60A;", index)}
                  />
                  <label
                    style={{ fontSize: "25px" }}
                    className={item.answer !== "&#x1F60A;" ? "skin-tone" : ""}
                  >
                    &#x1F60A;
                  </label>

                  <input
                    type="radio"
                    name={`emoji${index}`}
                    value="&#x1F607;"
                    onChange={() => handleDataChange("&#x1F607;", index)}
                  />
                  <label
                    style={{ fontSize: "25px" }}
                    className={item.answer !== "&#x1F607;" ? "skin-tone" : ""}
                  >
                    &#x1F607;
                  </label>

                  <input
                    type="radio"
                    name={`emoji${index}`}
                    value="&#x1F600;"
                    onChange={() => handleDataChange("&#x1F600;", index)}
                  />
                  <label
                    style={{ fontSize: "25px" }}
                    className={item.answer !== "&#x1F600;" ? "skin-tone" : ""}
                  >
                    &#x1F600;
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/star-survey">Next</Link>
      </div>
      <h1>
        Time left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </h1>
    </div>
  );
}
