import React, { useEffect, useState } from "react";

const QuestionAndAnswer = ({
  data,
  setStop,
  setQuestionNumber,
  questionNumber,
}) => {
  const [question, setquestion] = useState(null);
  const [selectanswer, setSelectanswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setquestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (data) => {
    setSelectanswer(data);
    setClassName("active answer");
    delay(
      3000,
      () => {
        setClassName(data.correct ? "answer correct" : "answer wrong");
      },
      1000
    );
    delay(
      6000,
      () => {
        if (data.correct) {
          setQuestionNumber((prev) => prev + 1);
          setSelectanswer(null);
        } else {
          setStop(true);
        }
      },
      1000
    );
  };

  return (
    <>
      <div className="QNA_box">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((data, index) => {
            return (
              <div
                className={selectanswer === data ? className : "answer"}
                key={index}
                onClick={() => handleClick(data)}
              >
                {data.text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswer;
