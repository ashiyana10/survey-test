import React, { createContext, useState, useEffect } from "react";

const surveyData = [
  {
    title: "Overall Satisfaction",
    question:
      "How satisfied are you with your overall experience with our credit card?",
    answer: "",
    submit:false,
    type:"emoji"
  },
  {
    title: "Interest Rates and Fees",
    question:
      "How would you rate the competitiveness of our interest rates and fees?",
    answer: "",
    submit:false,
    type:"emoji"
  },
  {
    title:"Online and Mobile Banking",
    question:"How would you rate your experience with our online and mobile banking services?",
    answer:"",
    submit:false,
    type:"star"
  }
];

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({surveyData,
  });

  const updateData = ( index, newData) => {
    setData((prevData) => {
      const newSurveyData = [...prevData.surveyData];
      newSurveyData[index] = { ...newSurveyData[index], ...newData };
      return {
        ...prevData,
        surveyData: newSurveyData,
      };
    });
  };

  useEffect(()=>
  console.log(data),[data])
  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
