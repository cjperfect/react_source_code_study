import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props) {
  const [a, setA] = React.useState("");
  const content = (
    <div
      className="app-div"
      onClick={() => {
        setA(Math.random());
      }}
    >
      haha{a}
    </div>
  );
  console.log(content);
  return content;
}

ReactDOM.render(<App />, document.getElementById("root"));
