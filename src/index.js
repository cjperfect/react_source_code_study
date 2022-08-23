import * as React from "react";
import * as ReactDOM from "react-dom";

function App(props) {
  const [a, setA] = React.useState("");
  const content = (
    <div className="parent" good={a}>
      parent文本{a}
      <p className="child1" good={a}>
        child1文本{a}
        <span className="grandChildren1" good={a}></span>
      </p>
      <p
        className="child2"
        onClick={() => {
          setA(Math.random());
        }}
        good={a}
      >
        child2文本{a}
      </p>
    </div>
  );

  console.log(content);
  return content;
}

ReactDOM.render(<App />, document.getElementById("root"));
