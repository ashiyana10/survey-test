import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { Star } from "./star";
export function ShowResult() {
  const { data, updateData } = useContext(DataContext);
  const [star, setStar] = useState(Array(5).fill(null));

  return (
    <div>
      <h3>Emoji Survey Result</h3>
      <table>
        {data.emojiSurvey.map((item, index) => (
          <tr key={index}>
            <td>{item.question}</td>
            <td>
              <label
                style={{ fontSize: "25px" }}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </td>
          </tr>
        ))}
      </table>

      <h3>Emoji Survey Result</h3>
      <table>
        {data.starSurvey.map((item, index) => (
          <tr key={index}>
            <td>{item.question}</td>
            <td>
              <div style={{ display: "flex" }}>
                {star.map((_, indexStar) => (
                  <Star
                    key={indexStar}
                    filled={indexStar < data.starSurvey[index].answer}
                  />
                ))}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
