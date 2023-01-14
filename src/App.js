import React, { useState } from "react";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import { data } from "./data/db";
const App = () => {
  const [money, setmoney] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  // console.log(money);
  return (
    <>
      <div className="app">
        <div className="main">
          <div className="top">
            <div className="timer">30</div>
          </div>
          <div className="bottom">
            <QuestionAndAnswer />
          </div>
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {money?.map((item) => {
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
