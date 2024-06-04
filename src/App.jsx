import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [operation, setOperation] = useState("");
  const [display, setDisplay] = useState([""]);
  const [result, setResult] = useState(0);

  const takeNumber = (e) => {
    if (operation === "") {
      switch (e.target.id) {
        case "one":
          setFirstNumber([...firstNumber, "1"]);
          setDisplay([...display, "1"]);
          break;
        case "two":
          setFirstNumber([...firstNumber, "2"]);
          setDisplay([...display, "2"]);
          break;
        case "three":
          setFirstNumber([...firstNumber, "3"]);
          setDisplay([...display, "3"]);
          break;
        case "four":
          setFirstNumber([...firstNumber, "4"]);
          setDisplay([...display, "4"]);
          break;
        case "five":
          setFirstNumber([...firstNumber, "5"]);
          setDisplay([...display, "5"]);
          break;
        case "six":
          setFirstNumber([...firstNumber, "6"]);
          setDisplay([...display, "6"]);
          break;
        case "seven":
          setFirstNumber([...firstNumber, "7"]);
          setDisplay([...display, "7"]);
          break;
        case "eight":
          setFirstNumber([...firstNumber, "8"]);
          setDisplay([...display, "8"]);
          break;
        case "nine":
          setFirstNumber([...firstNumber, "9"]);
          setDisplay([...display, "9"]);
          break;
        case "zero":
          setFirstNumber([...firstNumber, "0"]);
          setDisplay([...display, "0"]);
          break;
        default:
          return;
      }
    } else {
      switch (e.target.id) {
        case "one":
          setSecondNumber([...secondNumber, "1"]);
          setDisplay([...display, "1"]);
          break;
        case "two":
          setSecondNumber([...secondNumber, "2"]);
          setDisplay([...display, "2"]);
          break;
        case "three":
          setSecondNumber([...secondNumber, "3"]);
          setDisplay([...display, "3"]);
          break;
        case "four":
          setSecondNumber([...secondNumber, "4"]);
          setDisplay([...display, "4"]);
          break;
        case "five":
          setSecondNumber([...secondNumber, "5"]);
          setDisplay([...display, "5"]);
          break;
        case "six":
          setSecondNumber([...secondNumber, "6"]);
          setDisplay([...display, "6"]);
          break;
        case "seven":
          setSecondNumber([...secondNumber, "7"]);
          setDisplay([...display, "7"]);
          break;
        case "eight":
          setSecondNumber([...secondNumber, "8"]);
          setDisplay([...display, "8"]);
          break;
        case "nine":
          setSecondNumber([...secondNumber, "9"]);
          setDisplay([...display, "9"]);
          break;
        case "zero":
          setSecondNumber([...secondNumber, "0"]);
          setDisplay([...display, "0"]);
          break;
        default:
          return;
      }
      // setSecondNumber([...secondNumber, "1"]);
      // setDisplay([...display, "1"]);
    }
  };

  const handleNumber = (e) => {
    if (!result) {
      takeNumber(e);
    } else {
      handleClear();
      takeNumber(e);
    }
  };

  const takeOperator = (e) => {
    switch (e.target.id) {
      case "multiply":
        setOperation("multiply");
        setDisplay([...display, "*"]);
        break;
      case "subtract":
        setOperation("subtract");
        setDisplay([...display, "-"]);
        break;
      case "add":
        setOperation("add");
        setDisplay([...display, "+"]);
        break;
      case "divide":
        setOperation("divide");
        setDisplay([...display, "/"]);
        break;
      default:
        return;
    }
  };

  const handleOperation = (e) => {
    if (firstNumber[0]) {
      takeOperator(e);
    }
  };

  console.log(operation);

  const handleEqual = () => {
    if (operation != "") {
      if (operation === "multiply") {
        const awal = parseFloat(firstNumber.join(""));
        const akhir = parseFloat(secondNumber.join(""));
        setDisplay([...display, "=", awal * akhir]);
        setResult(awal * akhir);
      } else if (operation === "divide") {
        const awal = parseFloat(firstNumber.join(""));
        const akhir = parseFloat(secondNumber.join(""));
        setDisplay([...display, "=", awal / akhir]);
        setResult(awal / akhir);
      }
      // setOperation("");
    }
  };

  const handleClear = () => {
    setFirstNumber([]);
    setSecondNumber([]);
    setOperation("");
    setDisplay([""]);
    setResult(0);
  };
  // console.log("first: " + firstNumber, operation, "second: " + secondNumber);
  // console.log("display:" + display);

  return (
    <div id="calculator">
      <div id="display">
        <div id="display-top">{display}</div>
        <div id="display-bottom">{result}</div>
      </div>
      <div id="buttons">
        <div id="clear" onClick={handleClear}>
          C
        </div>
        <div id="divide" onClick={handleOperation}>
          /
        </div>
        <div id="multiply" onClick={handleOperation}>
          x
        </div>
        <div id="seven" className="main-numbers" onClick={handleNumber}>
          7
        </div>
        <div id="eight" className="main-numbers" onClick={handleNumber}>
          8
        </div>
        <div id="nine" className="main-numbers" onClick={handleNumber}>
          9
        </div>
        <div id="substract" onClick={handleOperation}>
          -
        </div>
        <div id="four" className="main-numbers" onClick={handleNumber}>
          4
        </div>
        <div id="five" className="main-numbers" onClick={handleNumber}>
          5
        </div>
        <div id="six" className="main-numbers" onClick={handleNumber}>
          6
        </div>
        <div id="add" onClick={handleOperation}>
          +
        </div>
        <div id="one" className="main-numbers" onClick={handleNumber}>
          1
        </div>
        <div id="two" className="main-numbers" onClick={handleNumber}>
          2
        </div>
        <div id="three" className="main-numbers" onClick={handleNumber}>
          3
        </div>
        <div id="equal" onClick={handleEqual}>
          =
        </div>
        <div id="zero">0</div>
        <div id="point">.</div>
      </div>
    </div>
  );
}

export default App;
