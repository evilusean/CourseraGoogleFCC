function App() {
    const [calc, setCalc] = React.useState("");
  
    const ops = ["/", "*", "+", "-", "."];
  
    const updateCalc = (value) => {
      const operatorPattern = /[+\-*/]/;
      if (calc === "" && value === "0") {
        return;
      }
      if (value === ".") {
        const parts = calc.split(operatorPattern);
        if (parts[parts.length - 1].includes(".")) {
          return;
        }
      }
      if (value !== "-" && operatorPattern.test(value)) {
        const lastChar = calc[calc.length - 1] || "";
        const secondLastChar = calc[calc.length - 2] || "";
        if (operatorPattern.test(lastChar)) {
          if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
            setCalc(calc.slice(0, -2) + value);
            return;
          }
          setCalc(calc.slice(0, -1) + value);
          return;
        }
      }
  
      setCalc(calc + value);
    };
    const calculate = () => {
      setCalc(eval(calc).toString());
    };
    const deleteLast = () => {
      if (calc === "") {
        return;
      }
  
      const value = calc.slice(0, -1);
      setCalc(value);
    };
  
    const clearAll = () => {
      setCalc("");
    };
  
    return (
      <div className="App">
        <div className="calculator">
          <div className="display" id="display">
            {calc || "0"}
          </div>
          <div className="operators">
            <button
              id="add"
              onClick={() => {
                updateCalc("+");
              }}
            >
              +
            </button>
            <button
              id="subtract"
              onClick={() => {
                updateCalc("-");
              }}
            >
              -
            </button>
            <button
              id="multiply"
              onClick={() => {
                updateCalc("*");
              }}
            >
              *
            </button>
            <button
              id="divide"
              onClick={() => {
                updateCalc("/");
              }}
            >
              /
            </button>
            <button id="del" onClick={deleteLast}>
              DEL
            </button>
            <button id="clear" onClick={clearAll}>
              AC
            </button>
          </div>
          <div className="digits">
            <button
              id="one"
              onClick={() => {
                updateCalc("1");
              }}
            >
              1
            </button>
            <button
              id="two"
              onClick={() => {
                updateCalc("2");
              }}
            >
              2
            </button>
            <button
              id="three"
              onClick={() => {
                updateCalc("3");
              }}
            >
              3
            </button>
            <button
              id="four"
              onClick={() => {
                updateCalc("4");
              }}
            >
              4
            </button>
            <button
              id="five"
              onClick={() => {
                updateCalc("5");
              }}
            >
              5
            </button>
            <button
              id="six"
              onClick={() => {
                updateCalc("6");
              }}
            >
              6
            </button>
            <button
              id="seven"
              onClick={() => {
                updateCalc("7");
              }}
            >
              7
            </button>
            <button
              id="eight"
              onClick={() => {
                updateCalc("8");
              }}
            >
              8
            </button>
            <button
              id="nine"
              onClick={() => {
                updateCalc("9");
              }}
            >
              9
            </button>
            <button
              id="zero"
              onClick={() => {
                updateCalc("0");
              }}
            >
              0
            </button>
            <button id="equals" onClick={calculate}>
              =
            </button>
            <button
              id="decimal"
              onClick={() => {
                updateCalc(".");
              }}
            >
              .
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));