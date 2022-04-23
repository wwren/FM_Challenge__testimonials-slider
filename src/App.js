import "./App.css";
import { data } from "./data.js";
import { ReactComponent as PatternBg } from "./img/pattern-bg.svg";
import { ReactComponent as PatternCurve } from "./img/pattern-curve.svg";
import { ReactComponent as PatternQuotes } from "./img/pattern-quotes.svg";
import { ReactComponent as Prev } from "./img/icon-prev.svg";
import { ReactComponent as Next } from "./img/icon-next.svg";
import { useState } from "react";
function App() {
  const [currIdx, setCurrIdx] = useState(0);
  const clickPrev = () => {
    if (currIdx != 0) {
      setCurrIdx(currIdx - 1);
    }
  };

  const clickNext = () => {
    if (currIdx != data.length - 1) {
      setCurrIdx(currIdx + 1);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="quote">
          <div className="quote--bg-pic">
            <PatternQuotes />
          </div>
          <p className="quote--text">{data[currIdx].quote}</p>
          <div className="author">
            <p className="quote--author">{data[currIdx].author}</p>
            <p className="quote--role">{data[currIdx].role}</p>
          </div>
        </div>
        <div className="picture">
          <div className="bg-picture">
            <PatternBg />
          </div>
          <img src={require(`${data[currIdx].image}`)}></img>
          <div className="button">
            <button className="left-btn" onClick={clickPrev}>
              <Prev />
            </button>
            <button className="right-btn" onClick={clickNext}>
              <Next />
            </button>
          </div>
        </div>
      </div>
      <div className="curve">
        <PatternCurve />
      </div>
    </div>
  );
}

export default App;
