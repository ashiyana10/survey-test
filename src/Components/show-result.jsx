import { useContext } from "react";
import { DataContext } from "../DataContext";
export function ShowResult() {
  const { data } = useContext(DataContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="text-center box p-5 bg-white rounded-4">
        <p className="font-36px fw-bold mb-0">Result</p>
        <span className="font-14px font-gray">Your survey result available here</span>
        <div className="mt-5">
        {
          data.surveyData.map((item,index)=>(
            <>
              <div className="d-flex justify-content-between text-center" key={index}>
                <p className="fw-bold">{item.title}</p>
                <p>{item.answer}</p>
                <p>{item.time}</p>
              </div>
              <hr/>
            </>
          ))
        }
        </div>
      </div>
    </div>
  );
}
