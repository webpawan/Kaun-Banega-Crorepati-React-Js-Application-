import React, { useEffect, useMemo, useState } from "react";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import { data } from "../src/db/db";
import { qnaData } from "./data/qnaData";


const App = () => {
  
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(data.find((res) => res.id === questionNumber - 1).amount);
  }, [data,questionNumber]);




  return (
    <>
      <div className="app">
        <div className="main">
          {stop ? (
            <h1 className="endText">you earned : {earned}</h1>
          ) : (
            <>
              <div className="top">
                <div className="timer">30</div>
              </div>
              <div className="bottom">
                <QuestionAndAnswer
                  data={qnaData}
                  setStop={setStop}
                  setQuestionNumber={setQuestionNumber}
                  questionNumber={questionNumber}
                />
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {data?.map((item) => {
              const { id, amount } = item;
              return (
                <li
                  className={
                    questionNumber === id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                  key={id}
                >
                  <span className="moneyListItemNumber">{id}</span>
                  <span className="moneyListItemAmount">{amount}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
