import React, { createContext, useState, useEffect } from "react";

type Question = {
  question: string,
  answer: string,
};

const emojiSurveyData: Question[] = [
  { question: "How would you rate the quality of service provided?", answer: "" },
  { question: "How satisfied are you with the product you received?", answer: "" },
  { question: "How likely are you to recommend our company to a friend or colleague?", answer: "" },
  { question: "How easy was it to navigate our website/app?", answer: "" },
  { question: "How responsive were our customer support representatives to your inquiries?", answer: "" },
];

const starSurveyData: Question[] = [
  { question: "How would you rate the quality of service provided?", answer: "" },
  { question: "How satisfied are you with the product you received?", answer: "" },
  { question: "How likely are you to recommend our company to a friend or colleague?", answer: "" },
  { question: "How easy was it to navigate our website/app? ", answer: "" },
  { question: "How responsive were our customer support representatives to your inquiries?", answer: "" },
];

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    emojiSurvey: emojiSurveyData,
    starSurvey: starSurveyData,
  });

  const updateData = (surveyType, index, newData) => {
    setData((prevData) => {
      const updatedSurvey = [...prevData[surveyType]];
      updatedSurvey[index] = { ...updatedSurvey[index], ...newData };
      return {
        ...prevData,
        [surveyType]: updatedSurvey,
      };
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
